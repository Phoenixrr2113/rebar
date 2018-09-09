"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.getObjectManager = getObjectManager;exports.default = exports.User_0 = void 0;

var _dataloader = _interopRequireDefault(require("dataloader"));
var _graphqlRelay = require("graphql-relay");

var _UserToken2Anonymous = _interopRequireDefault(require("../_configuration/urb-base-server/UserToken2Anonymous"));
var _defaultPersister = _interopRequireDefault(require("../_configuration/urb-base-server/graphql/defaultPersister"));
var _getNewUser = _interopRequireDefault(require("../_configuration/urb-base-server/graphql/model/getNewUser"));
var _siteSettings = require("../_configuration/urb-base-server/siteSettings");
var _User = _interopRequireDefault(require("../_configuration/urb-base-server/graphql/model/User"));

var _log = _interopRequireDefault(require("./log"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Anonymous user
const User_0 = new _User.default(
Object.assign((0, _getNewUser.default)(_defaultPersister.default.uuidNull()), {
  id: _defaultPersister.default.uuidNull(),
  UserToken2: _UserToken2Anonymous.default,
  User_DisplayName: 'Anonymous' }));exports.User_0 = User_0;

















// Static set of entity definitions
const entityDefinitions =

{};

// Static array of object managers
const setPersisters = new Set();

// Value for a change indicating that the record is deleted
const deletedRecord = {
  deleted: true };


class ObjectManager {








  constructor() {
    // Loaders for a single record, by entity name
    this.loadersSingle = {};

    // Loaders for a multiple record lists, by entity name
    this.loadersMultiple = {};

    // Changes made to records, by entity name
    this.changes = {};

    // UserID for the viewer. Could be unset if ObjectManager is used by system
    this.Viewer_User_id = 'Object Manager: viewer user id has not been set';

    // Request and response objects, if available
    this.request = null;
    this.response = null;

    // Setting site information mostly to satify flow;
    // also, in order to be able to better detect errors when not set
    this.siteInformation = {
      artifact_id: 'Object Manager: artifact_id has not been set',
      siteConfiguration: {} };

  }

  static registerEntity(entityName, EntityType, persister) {
    if (entityName in entityDefinitions) throw new Error('Entity already registered: ' + entityName);

    // In order to be able to access the name as a static property of the type
    EntityType.entityName = entityName;

    // Determine persister - default, or otherwise
    if (persister == null) persister = _defaultPersister.default;

    // A set would retain only one copy of a persister
    setPersisters.add(persister);

    const entityDefinition = {
      EntityName: entityName,
      EntityType,
      fieldsWithSuffix: {},
      Persister: persister,
      TriggersForAdd: [],
      TriggersForUpdate: [],
      TriggersForRemove: [],
      TriggersForUpdateShouldRetrieveCurrentRecord: false


      // Determine fields by fields with suffix
      // For the User-related tables, there is no automatic support:
      // User_id and artifact_id have to be explicitly specified
    };if (entityName !== 'User' && entityName !== 'UserAccount' && entityName !== 'UserSession') {
      const example = new EntityType({});
      for (let suffix of [
      '_artifact_id',
      '_user_id',
      '_created_by',
      '_created_on',
      '_modified_on',
      '_modified_by'])
      {
        const fieldName = entityDefinition.EntityName + suffix;

        // Does the object type have it?
        if (example.hasOwnProperty(fieldName)) {
          entityDefinition.fieldsWithSuffix[suffix] = true;
        }
      }
    }

    entityDefinitions[entityName] = entityDefinition;
  }

  static RegisterTriggerForAdd(entityName, handler) {
    entityDefinitions[entityName].TriggersForAdd.push(handler);
  }

  static RegisterTriggerForUpdate(
  entityName,
  handler,
  shouldRetrieveCurrentRecord)
  {
    entityDefinitions[entityName].TriggersForUpdate.push(handler);

    if (shouldRetrieveCurrentRecord)
    entityDefinitions[entityName].TriggersForUpdateShouldRetrieveCurrentRecord = true;
  }

  static RegisterTriggerForAddAndUpdate(entityName, handler) {
    ObjectManager.RegisterTriggerForAdd(entityName, handler);
    ObjectManager.RegisterTriggerForUpdate(entityName, handler, false);
  }

  static RegisterTriggerForRemove(entityName, handler) {
    entityDefinitions[entityName].TriggersForRemove.push(handler);
  }

  // Apply artifact_id, User_id security
  addUserIdAndOrSiteIdToFilterOrFields(entityDefinition, filterOrFields) {
    for (let suffix of ['_artifact_id', '_user_id']) {
      // Does the object type have it?
      if (entityDefinition.fieldsWithSuffix[suffix]) {
        const fieldName = entityDefinition.EntityName + suffix;

        // Is the filter/fields collection missing it?
        if (!filterOrFields.hasOwnProperty(fieldName))
        filterOrFields[fieldName] =
        suffix === '_artifact_id' ? this.siteInformation.artifact_id : this.Viewer_User_id;
      }
    }
  }

  // Update created and modified fields
  updatedCreatedAndModifiedFields(
  entityDefinition,
  fields,
  isCreating)
  {
    const dtNow = new Date();

    for (let suffix of isCreating ?
    ['_created_by', '_created_on', '_modified_on', '_modified_by'] :
    ['_modified_on', '_modified_by']) {
      // Does the object type have it?
      if (entityDefinition.fieldsWithSuffix[suffix]) {
        const fieldName = entityDefinition.EntityName + suffix;

        // Is the filter/fields collection missing it?
        if (!fields.hasOwnProperty(fieldName))
        fields[fieldName] =
        suffix === '_modified_by' || suffix === '_created_by' ? this.Viewer_User_id : dtNow;
      }
    }
  }

  setViewerUserId(Viewer_User_id) {
    this.Viewer_User_id = Viewer_User_id;
  }

  setRequest(req, res) {
    this.request = req;
    this.response = res;
  }

  setSiteInformation(siteInformation) {
    this.siteInformation = siteInformation;
  }

  getLoadersSingle(entityName) {
    const foundLoaders = this.loadersSingle[entityName];

    if (foundLoaders != null) {
      return foundLoaders;
    } else {
      this.loadersSingle[entityName] = {};
      return this.loadersSingle[entityName];
    }
  }

  getLoadersMultiple(entityName) {
    const foundLoaders = this.loadersMultiple[entityName];

    if (foundLoaders != null) {
      return foundLoaders;
    } else {
      this.loadersMultiple[entityName] = {};
      return this.loadersMultiple[entityName];
    }
  }

  clearLoadersMultiple(entityName) {
    this.loadersMultiple[entityName] = {};
  }

  recordChange(entityName, fields, isDeletion) {
    let records = this.changes[entityName];
    if (records == null) records = this.changes[entityName] = {};

    const id = fields.id;

    records[id] = isDeletion ? deletedRecord : fields;
  }

  getViewerUserId() {
    if (this.Viewer_User_id === 'Object Manager: viewer user id has not been set')
    throw new Error('Object Manager: viewer user id has not been set');

    return this.Viewer_User_id;
  }

  getRequest() {
    if (this.request == null) throw new Error('Object Manager: request has not been set');

    return this.request;
  }

  getLoader(entityName, fieldName, multipleResults) {
    if (!(entityName in entityDefinitions))
    throw new Error('Can not find entity type named ' + entityName);

    const entityDefinition = entityDefinitions[entityName];
    const entityType = entityDefinition.EntityType;

    let loadersList = multipleResults ?
    this.getLoadersMultiple(entityName) :
    this.getLoadersSingle(entityName);

    let loader = loadersList[fieldName];
    if (loader == null) {
      if (multipleResults)
      loader = new _dataloader.default(filter => {
        try {
          return entityDefinition.Persister.getObjectList(entityName, entityType, filter);
        } catch (err) {
          _log.default.log('error', 'Object Manager: Could not load multiple results ' + entityName, {
            fieldName,
            err,
            stack: err.stack });

          throw err;
        }
      });else

      loader = new _dataloader.default(filter => {
        try {
          return entityDefinition.Persister.getOneObject(entityName, entityType, filter);
        } catch (err) {
          _log.default.log('error', 'Object Manager: Could not load single result ' + entityName, {
            fieldName,
            err,
            stack: err.stack });

          throw err;
        }
      });

      loadersList[fieldName] = loader;
    }

    return loader;
  }

  getOneObject(entityName, query) {
    // Special hack for anonymous users
    if (entityName === 'User')
    if (_defaultPersister.default.uuidEquals(_defaultPersister.default.uuidNull(), query.id))
    return Promise.resolve(User_0);

    // Apply artifact_id, User_id security
    this.addUserIdAndOrSiteIdToFilterOrFields(entityDefinitions[entityName], query);

    // For all non-user, non 0 ids, load from data loader per protocol
    const loaderIdentifier = Object.keys(query).
    sort().
    join(',');
    const loader = this.getLoader(entityName, loaderIdentifier, false);

    return loader.load(query).then(result => {
      const changes = this.changes[entityName];
      if (changes) {
        // $AssureFlow - by convention all entity objects are expected to have an id
        const change = changes[result.id];

        if (change != null) {
          // Object is not found, return null if deleted
          if (change === deletedRecord) {
            result = null;
          } else {
            // Add or update
            Object.assign(result, change);
          }
        }
      }
      return result;
    });
  }

  getObjectList(entityName, query) {
    // Apply artifact_id, User_id security
    this.addUserIdAndOrSiteIdToFilterOrFields(entityDefinitions[entityName], query);

    const loaderIdentifier = Object.keys(query).
    sort().
    join(',');
    const loader = this.getLoader(entityName, loaderIdentifier, true);

    return loader.load(query).then(arrResults => {
      const changes = this.changes[entityName];
      if (changes) {
        for (let ix = 0; ix < arrResults.length; ix++) {
          const change = changes[arrResults[ix].id];
          if (change != null) {
            if (change === deletedRecord)
              // Reduce ix in order not to skip over a record
              arrResults.splice(ix--, 1);
              // Add or update
            else Object.assign(arrResults[ix], change);
          }
        }
      }
      return arrResults;
    });
  }

  invalidateLoaderCache(entityName, fields) {
    // At this moment there is no obvious way of knowing what to clear from lists, so delete them all
    this.clearLoadersMultiple(entityName);

    const loadersSingle = this.getLoadersSingle(entityName);
    for (let loaderFieldName in loadersSingle) {
      if (loaderFieldName === 'id') loadersSingle[loaderFieldName].clear(fields.id);else
      delete loadersSingle[loaderFieldName];
    }
  }

  executeTriggers(arrTriggers, fields, oldFields) {
    const arrPromises = [];
    for (let trigger of arrTriggers) {
      arrPromises.push(trigger(this, fields, oldFields));
    }

    return Promise.all(arrPromises);
  }

  assignPrimaryKey(entityName, fields) {
    const entityDefinition = entityDefinitions[entityName];

    if (entityDefinition == null)
    throw new Error('Object Manager: Cound not find entity ' + entityName);

    // Generate primary key, overwrite if already present
    fields.id = entityDefinition.Persister.uuidRandom();
  }

  async add(entityName, fields) {
    const entityDefinition = entityDefinitions[entityName];
    if (entityDefinition == null)
    throw new Error('Object Manager: Cound not find entity ' + entityName);

    // Apply artifact_id, User_id security
    this.addUserIdAndOrSiteIdToFilterOrFields(entityDefinition, fields);

    // Update created and modified fields
    this.updatedCreatedAndModifiedFields(entityDefinition, fields, true);

    // Generate primary key, if not already present
    if (!fields.id) fields.id = entityDefinition.Persister.uuidRandom();

    // If this is a user ID
    if (entityName === 'User') this.setViewerUserId(fields.id.toString());

    this.recordChange(entityName, fields, false);

    try {
      await this.executeTriggers(entityDefinition.TriggersForAdd, fields);

      await entityDefinition.Persister.add(entityName, fields, entityDefinition.EntityType);
    } catch (err) {
      _log.default.log('error', 'Object Manager: Could not add ' + entityName, {
        fields,
        err,
        stack: err.stack });

      throw err;
    }

    this.invalidateLoaderCache(entityName, fields);

    return fields.id;
  }

  async update(entityName, fields) {
    const entityDefinition = entityDefinitions[entityName];
    if (entityDefinition == null)
    throw new Error('Object Manager: Cound not find entity ' + entityName);

    try {
      // Apply artifact_id, User_id security
      this.addUserIdAndOrSiteIdToFilterOrFields(entityDefinition, fields);

      // Update created and modified fields
      this.updatedCreatedAndModifiedFields(entityDefinition, fields, false);

      // Retrieve the current values, if triggers will be used
      let oldFields = null;
      if (entityDefinition.TriggersForUpdateShouldRetrieveCurrentRecord) {
        oldFields = this.getOneObject(entityName, {
          id: fields.id });

      }

      this.recordChange(entityName, fields, false);

      await this.executeTriggers(entityDefinition.TriggersForUpdate, fields, oldFields);

      await entityDefinition.Persister.update(entityName, fields);
    } catch (err) {
      _log.default.log('error', 'Object Manager: Could not update ' + entityName, {
        fields,
        err,
        stack: err.stack });

      throw err;
    }

    this.invalidateLoaderCache(entityName, fields);
  }

  async remove(entityName, fields) {
    const entityDefinition = entityDefinitions[entityName];
    if (entityDefinition == null)
    throw new Error('Object Manager: Cound not find entity ' + entityName);

    try {
      // Apply artifact_id, User_id security
      this.addUserIdAndOrSiteIdToFilterOrFields(entityDefinition, fields);

      this.recordChange(entityName, fields, true);

      await this.executeTriggers(entityDefinition.TriggersForRemove, fields);

      await entityDefinition.Persister.remove(entityName, fields);
    } catch (err) {
      _log.default.log('error', 'Object Manager: Could not remove ' + entityName, {
        fields,
        err,
        stack: err.stack });

      throw err;
    }

    this.invalidateLoaderCache(entityName, fields);
  }

  uuidFromString(entityName, id) {
    const entityDefinition = entityDefinitions[entityName];

    return entityDefinition.Persister.uuidFromString(id);
  }

  uuidToString(entityName, id) {
    const entityDefinition = entityDefinitions[entityName];

    return entityDefinition.Persister.uuidToString(id);
  }

  cursorForObjectInConnection(entityName, arr, obj) {
    const entityDefinition = entityDefinitions[entityName];

    // IDs can be both strings and Uuid. Check that first, and convert to String
    const obj_id = entityDefinition.Persister.uuidToString(obj.id);

    // Make sure that the object and its instance can be compared with ===
    // assumed that the object has id field which is unique
    for (let ix = 0; ix < arr.length; ix++) {
      const arr_element_id = entityDefinition.Persister.uuidToString(arr[ix].id);
      if (arr_element_id === obj_id) {
        arr[ix] = obj;
        break;
      }
    }
    let cursor = (0, _graphqlRelay.cursorForObjectInConnection)(arr, obj);
    if (cursor == null)
    _log.default.log(
    'error',
    'Object Manager: Could not create cursor for object in connection for ' + entityName,
    {
      obj,
      arr });


    return cursor;
  }

  static initializePersisters(runAsPartOfSetupDatabase, cb) {
    for (let persister of setPersisters)
    persister.initialize(runAsPartOfSetupDatabase, () => {
      cb();
    });
  }}


// Register the user
exports.default = ObjectManager;ObjectManager.registerEntity('User', _User.default);

// Get an Object Manager with site information
async function getObjectManager(req, res) {
  // Set site information
  const siteInformation = await (0, _siteSettings.getSiteInformation)(req, res); // Create individual object manager for each request
  const objectManager = new ObjectManager(); // Set request and response

  objectManager.setRequest(req, res); // Place maker configuration into object manager
  objectManager.setSiteInformation(siteInformation);
  return objectManager;
}
//# sourceMappingURL=ObjectManager.js.map