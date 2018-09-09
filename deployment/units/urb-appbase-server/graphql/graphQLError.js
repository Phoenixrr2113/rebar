"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.setDefaultHandler = setDefaultHandler;exports.maskErrors = maskErrors;exports.defaultHandler = exports.UserError = exports.IsUserError = exports.Processed = void 0;



var _graphql = require("graphql");

var _log = _interopRequireDefault(require("../../urb-base-server/log"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // This is a modified version of: https://github.com/kadirahq/graphql-errors/blob/master/lib/index.js
//import uuid from 'uuid';
// Mark field/type/schema
const Processed = Symbol();

// Used to identify UserErrors
exports.Processed = Processed;const IsUserError = Symbol();

// UserErrors will be sent to the user
exports.IsUserError = IsUserError;class UserError extends Error {
  // $AssureFlow
  constructor(...args) {
    super(...args);
    this.name = 'Error';
    this.message = args[0];

    // $AssureFlow
    this[IsUserError] = true;

    // $AssureFlow
    Error.captureStackTrace(this, 'Error');
  }}


// Modifies errors before sending to the user
exports.UserError = UserError;let defaultHandler = function (err) {
  if (err[IsUserError]) {
    return err;
  }
  // TODO: x1000 Consider having a unique ID for the errors, most probably move it to the log though, so that all modules can use it
  // const errId = uuid.v4();
  // err.message = `${err.message}: ${errId}`;
  _log.default.log('error', 'Resolve function failed', {
    error: err && err.stack || err });

  err.message = 'Internal Error';
  return err;
};

// Changes the default error handler function
exports.defaultHandler = defaultHandler;function setDefaultHandler(handlerFn) {
  exports.defaultHandler = defaultHandler = handlerFn;
}

// Masks graphql schemas, types or individual fields
function maskErrors(thing, fn = defaultHandler) {
  if (thing instanceof _graphql.GraphQLSchema) {
    maskSchema(thing, fn);
  } else if (thing instanceof _graphql.GraphQLObjectType) {
    maskType(thing, fn);
  } else {
    maskField(thing, fn);
  }
}

function maskField(field, fn) {
  const resolveFn = field.resolve;
  if (field[Processed] || !resolveFn) {
    return;
  }

  field[Processed] = true;
  field.resolve = async function (...args) {
    try {
      const out = resolveFn.call(this, ...args);
      return await Promise.resolve(out);
    } catch (e) {
      throw fn(e);
    }
  };

  // save the original resolve function
  field.resolve._resolveFn = resolveFn;
}

function maskType(type, fn) {
  if (type[Processed] || !type.getFields) {
    return;
  }

  const fields = type.getFields();
  for (const fieldName in fields) {
    if (!Object.hasOwnProperty.call(fields, fieldName)) {
      continue;
    }

    maskField(fields[fieldName], fn);
  }
}

function maskSchema(schema, fn) {
  const types = schema.getTypeMap();
  for (const typeName in types) {
    if (!Object.hasOwnProperty.call(types, typeName)) {
      continue;
    }

    maskType(types[typeName], fn);
  }
}
//# sourceMappingURL=graphQLError.js.map