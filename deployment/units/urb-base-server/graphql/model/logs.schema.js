Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../../configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('logs',{
fields:{
key:'text',
date:'timestamp',
level:'text',
message:'text',
meta:'text'},

key:['key','date']});var _default=


true;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(_default,'default','units/urb-base-server/graphql/model/logs.schema.js');}();;
//# sourceMappingURL=logs.schema.js.map