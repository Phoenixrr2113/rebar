(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{749:function(e,t,n){"use strict";var o,a={kind:"Fragment",name:"ToDoList_Viewer",type:"Viewer",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["ToDos"]}]},argumentDefinitions:[{kind:"RootArgument",name:"status",type:"String"}],selections:[{kind:"LinkedField",alias:"ToDos",name:"__ToDoList_ToDos_connection",storageKey:null,args:[{kind:"Variable",name:"status",variableName:"status",type:"String"}],concreteType:"ToDosConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"ToDosEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[o={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},{kind:"FragmentSpread",name:"ToDoItem_ToDo",args:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"pageInfo",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"endCursor",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"hasNextPage",args:null,storageKey:null}]}]},o,{kind:"ScalarField",alias:null,name:"ToDo_TotalCount",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null},{kind:"FragmentSpread",name:"ToDoItem_Viewer",args:null}]};a.hash="68b5216db9d5b129661a98b5e2476770",e.exports=a},750:function(e,t,n){"use strict";var o={kind:"Fragment",name:"ToDoItem_ToDo",type:"ToDo",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}],hash:"b4582da6b8371980f5147d0ea118c859"};e.exports=o},751:function(e,t,n){"use strict";var o={kind:"Fragment",name:"ToDoItem_Viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}],hash:"1a7d80a3304bcbe9332edd571759ed60"};e.exports=o},752:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=d(n(64)),l=n(87),i=d(l),r=d(n(0)),u=n(25),s=d(n(135));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));o._handle_Close=function(){o.props.handlerClose()},o._handle_OK=function(){o.props.handlerUpdate({ToDo_Text:o.state.ToDo_Text}),o.props.handlerClose()};var a=o.props.ToDo_Text;return o.state={ToDo_Text:a},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){var e=this,t=this.state.ToDo_Text;return r.default.createElement("div",null,r.default.createElement(i.default,{open:this.props.open,onRequestClose:this._handle_Close},r.default.createElement(l.DialogTitle,null,"ToDo"),r.default.createElement(l.DialogContent,null,r.default.createElement(s.default,{label:"To Do",fullWidth:!0,value:t,onChange:function(t){return e.setState({ToDo_Text:t.target.value})}})),r.default.createElement(l.DialogActions,null,r.default.createElement(a.default,{onClick:this._handle_Close},"Cancel"),r.default.createElement(a.default,{onClick:this._handle_OK,color:"primary"},"OK"))))}}]),t}();t.default=(0,u.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"}}})(c)},753:function(e,t,n){"use strict";var o,a,l={kind:"Request",operationKind:"mutation",name:"ToDoUpdateRenameMutation",id:null,text:"mutation ToDoUpdateRenameMutation(\n  $input: ToDoUpdateRenameInput!\n) {\n  ToDoUpdateRename(input: $input) {\n    ToDo {\n      id\n      ToDo_Text\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoUpdateRenameMutation",type:"Mutation",metadata:null,argumentDefinitions:o=[{kind:"LocalArgument",name:"input",type:"ToDoUpdateRenameInput!",defaultValue:null}],selections:a=[{kind:"LinkedField",alias:null,name:"ToDoUpdateRename",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoUpdateRenameInput!"}],concreteType:"ToDoUpdateRenamePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"ToDo",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}]}]}]},operation:{kind:"Operation",name:"ToDoUpdateRenameMutation",argumentDefinitions:o,selections:a}};l.hash="5ca316bc08f370bba86945985652a644",e.exports=l},754:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),a=function(){return n(753)};t.default={commit:function(e,t,n){return(0,o.commitMutation)(e,{mutation:a,variables:{input:{id:t.id,ToDo_Text:n}},optimisticResponse:function(){return{ToDoUpdateRename:{ToDo:{id:t.id,ToDo_Text:n}}}}})}}},755:function(e,t,n){"use strict";var o,a,l,i,r,u={kind:"Request",operationKind:"mutation",name:"ToDoDeleteMutation",id:null,text:"mutation ToDoDeleteMutation(\n  $input: ToDoDeleteInput!\n) {\n  ToDoDelete(input: $input) {\n    Viewer {\n      ToDo_TotalCount\n      ToDo_CompletedCount\n      id\n    }\n    deletedId\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoDeleteMutation",type:"Mutation",metadata:null,argumentDefinitions:o=[{kind:"LocalArgument",name:"input",type:"ToDoDeleteInput!",defaultValue:null}],selections:[{kind:"LinkedField",alias:null,name:"ToDoDelete",storageKey:null,args:a=[{kind:"Variable",name:"input",variableName:"input",type:"ToDoDeleteInput!"}],concreteType:"ToDoDeletePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[l={kind:"ScalarField",alias:null,name:"ToDo_TotalCount",args:null,storageKey:null},i={kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null}]},r={kind:"ScalarField",alias:null,name:"deletedId",args:null,storageKey:null}]}]},operation:{kind:"Operation",name:"ToDoDeleteMutation",argumentDefinitions:o,selections:[{kind:"LinkedField",alias:null,name:"ToDoDelete",storageKey:null,args:a,concreteType:"ToDoDeletePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[l,i,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},r]}]}};u.hash="a581035e0f38d5d8ad86368e6420b22c",e.exports=u},756:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),a=n(34),l=function(){return n(755)};function i(e,t,n){var o=e.get(t.id);["any","active","completed"].forEach(function(e){var t=a.ConnectionHandler.getConnection(o,"ToDoList_ToDos",{status:e});t&&a.ConnectionHandler.deleteNode(t,n)})}t.default={commit:function(e,t,n){return(0,o.commitMutation)(e,{mutation:l,variables:{input:{id:n.id}},updater:function(e){var n=e.getRootField("ToDoDelete");i(e,t,n.getValue("deletedId"))},optimisticUpdater:function(e){i(e,t,n.id);var o=e.get(t.id),a=o.getValue("ToDo_TotalCount");null!=a&&o.setValue(a-1,"ToDo_TotalCount");var l=o.getValue("ToDo_CompletedCount");null!=l&&(null!=n.ToDo_Complete?n.ToDo_Complete&&o.setValue(l-1,"ToDo_CompletedCount"):null!=a&&a-1<l&&o.setValue(a-1,"ToDo_CompletedCount"))}})}}},757:function(e,t,n){"use strict";var o,a,l,i={kind:"Request",operationKind:"mutation",name:"ToDoUpdateStatusMutation",id:null,text:"mutation ToDoUpdateStatusMutation(\n  $input: ToDoUpdateStatusInput!\n) {\n  ToDoUpdateStatus(input: $input) {\n    Viewer {\n      id\n      ToDo_CompletedCount\n    }\n    ToDo {\n      id\n      ToDo_Complete\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoUpdateStatusMutation",type:"Mutation",metadata:null,argumentDefinitions:o=[{kind:"LocalArgument",name:"input",type:"ToDoUpdateStatusInput!",defaultValue:null}],selections:l=[{kind:"LinkedField",alias:null,name:"ToDoUpdateStatus",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoUpdateStatusInput!"}],concreteType:"ToDoUpdateStatusPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"ToDo",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[a,{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null}]}]}]},operation:{kind:"Operation",name:"ToDoUpdateStatusMutation",argumentDefinitions:o,selections:l}};i.hash="05dd206726300c3f5a9866475072d101",e.exports=i},758:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),a=n(34),l=function(){return n(757)};function i(e,t,n){var o=e.get(t.id),l=n.getValue("ToDo_Complete")?"active":"completed",i=a.ConnectionHandler.getConnection(o,"ToDoList_ToDos",{status:l});i&&a.ConnectionHandler.deleteNode(i,n.getValue("id"))}t.default={commit:function(e,t,n,a){return(0,o.commitMutation)(e,{mutation:l,variables:{input:{id:n.id,ToDo_Complete:a}},updater:function(e){var n=e.getRootField("ToDoUpdateStatus");i(e,t,n.getLinkedRecord("ToDo"))},optimisticUpdater:function(e){var o=e.get(n.id);o.setValue(a,"complete"),i(e,t,o);var l=e.get(t.id),r=l.getValue("ToDo_CompletedCount");null!=r&&l.setValue(r+(a?1:-1),"ToDo_CompletedCount")}})}}},759:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=g(n(263)),l=g(n(137)),i=n(47),r=n(108),u=g(r),s=n(784),d=g(n(0)),c=n(21),p=g(n(758)),m=g(n(756)),f=g(n(754)),T=g(n(752));function g(e){return e&&e.__esModule?e:{default:e}}var D=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o._handle_onClickCheckbox=function(e,t){var n=o.props,a=n.relay,l=n.Viewer,i=n.ToDo;p.default.commit(a.environment,l,i,t)},o._handle_Update_Properties=function(e){var t=o.props,n=t.relay,a=t.ToDo;f.default.commit(n.environment,a,e.ToDo_Text)},o._handle_Close_Properties=function(){o.setState({propertiesIsOpen:!1})},o.handleClickListItem=function(e){o.setState({menuIsOpen:!0,anchorEl:e.currentTarget})},o._handle_Menu_onClick_Edit=function(e){o.setState({menuIsOpen:!1,propertiesIsOpen:!0})},o._handle_Menu_onClick_Delete=function(e){o.setState({menuIsOpen:!1});var t=o.props,n=t.relay,a=t.Viewer,l=t.ToDo;m.default.commit(n.environment,a,l)},o.handleRequestClose=function(){o.setState({menuIsOpen:!1})},o.state={anchorEl:void 0,menuIsOpen:!1,propertiesIsOpen:!1},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),o(t,[{key:"render",value:function(){var e=this,t=this.props.ToDo,n=t.ToDo_Complete,o=t.ToDo_Text;return d.default.createElement("div",null,d.default.createElement(i.ListItem,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu",onClick:function(t){return e._handle_onClickCheckbox(t,!n)}},d.default.createElement(a.default,{checked:n}),d.default.createElement(i.ListItemText,{primary:o}),d.default.createElement(i.ListItemSecondaryAction,null,d.default.createElement(l.default,{onClick:this.handleClickListItem},d.default.createElement(s.MoreVert,null)))),d.default.createElement(u.default,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.menuIsOpen,onRequestClose:this.handleRequestClose},d.default.createElement(r.MenuItem,{key:"edit",onClick:function(t){return e._handle_Menu_onClick_Edit(t)}},"Edit"),d.default.createElement(r.MenuItem,{key:"delete",onClick:function(t){return e._handle_Menu_onClick_Delete(t)}},"Delete")),d.default.createElement(T.default,{ToDo_Text:o,handlerUpdate:this._handle_Update_Properties,handlerClose:this._handle_Close_Properties,open:this.state.propertiesIsOpen}))}}]),t}();t.default=(0,c.createFragmentContainer)(D,{Viewer:function(){return n(751)},ToDo:function(){return n(750)}})},760:function(e,t,n){"use strict";var o,a,l,i,r={kind:"Request",operationKind:"mutation",name:"ToDoListUpdateMarkAllMutation",id:null,text:"mutation ToDoListUpdateMarkAllMutation(\n  $input: ToDoListUpdateMarkAllInput!\n  $status: String!\n) {\n  ToDoListUpdateMarkAll(input: $input) {\n    Viewer {\n      ToDos(status: $status) {\n        edges {\n          node {\n            id\n            ToDo_Complete\n            ToDo_Text\n          }\n        }\n      }\n      id\n      ToDo_CompletedCount\n    }\n    changedToDos {\n      id\n      ToDo_Complete\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoListUpdateMarkAllMutation",type:"Mutation",metadata:null,argumentDefinitions:o=[{kind:"LocalArgument",name:"input",type:"ToDoListUpdateMarkAllInput!",defaultValue:null},{kind:"LocalArgument",name:"status",type:"String!",defaultValue:null}],selections:i=[{kind:"LinkedField",alias:null,name:"ToDoListUpdateMarkAll",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoListUpdateMarkAllInput!"}],concreteType:"ToDoListUpdateMarkAllPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"ToDos",storageKey:null,args:[{kind:"Variable",name:"status",variableName:"status",type:"String"}],concreteType:"ToDosConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"ToDosEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},l={kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}]}]}]},a,{kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"changedToDos",storageKey:null,args:null,concreteType:"ToDo",plural:!0,selections:[a,l]}]}]},operation:{kind:"Operation",name:"ToDoListUpdateMarkAllMutation",argumentDefinitions:o,selections:i}};r.hash="18b2dc6ec26946a22a0803be1ba1d2f2",e.exports=r},761:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),a=n(34),l=function(){return n(760)};t.default={commit:function(e,t,n,i,r){return(0,o.commitMutation)(e,{mutation:l,variables:{input:{ToDo_Complete:i},status:r},updater:function(e){var n=e.get(t.id),o=a.ConnectionHandler.getConnection(n,"ToDoList_ToDos",{status:r}),l=e.getRootField("ToDoListUpdateMarkAll").getLinkedRecord("Viewer").getLinkedRecord("ToDos",{status:r}).getLinkedRecords("edges");o.setLinkedRecords(l,"edges")},optimisticUpdater:function(e){var n=e.get(t.id),o=a.ConnectionHandler.getConnection(n,"ToDoList_ToDos",{status:r});(i&&"active"===r||!i&&"completed"===r)&&o.setLinkedRecords([],"edges")},optimisticResponse:function(){var e={Viewer:{id:t.id,ToDo_CompletedCount:0},changedToDos:null};return n&&n.edges&&(e.changedToDos=n.edges.filter(function(e){return e.node.ToDo_Complete!==i}).map(function(e){return{id:e.node.id,ToDo_Complete:i}})),i?null!=t.ToDo_TotalCount&&(e.Viewer.ToDo_CompletedCount=t.ToDo_TotalCount):e.Viewer.ToDo_CompletedCount=0,{ToDoListUpdateMarkAll:e}}})}}},785:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=g(n(265)),l=g(n(263)),i=n(109),r=g(n(47)),u=n(25),s=g(n(2)),d=g(n(0)),c=n(21),p=n(264),m=g(p),f=g(n(761)),T=g(n(759));function g(e){return e&&e.__esModule?e:{default:e}}function D(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),i=0;i<a;i++)l[i]=arguments[i];return n=o=D(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o._handle_onClick_MarkAll=function(e,t){var n=o.props,a=n.relay,l=n.Viewer,i=o.context.relay.variables,r=t;f.default.commit(a.environment,l,l.ToDos,r,i.status)},o._handle_onChange=function(e,t){var n=2===t?"/todo/completed":1===t?"/todo/active":"/todo";o.context.router.push(n)},D(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),o(t,[{key:"renderTabs",value:function(){var e=this.context.relay.variables.status,t="active"===e?1:"completed"===e?2:0;return d.default.createElement(a.default,{position:"static"},d.default.createElement(m.default,{value:t,onChange:this._handle_onChange},d.default.createElement(p.Tab,{label:"All"}),d.default.createElement(p.Tab,{label:"Active"}),d.default.createElement(p.Tab,{label:"Completed"})))}},{key:"render",value:function(){var e=this.props.Viewer,t=e.ToDos,n=e.ToDo_TotalCount,o=e.ToDo_CompletedCount;return n?d.default.createElement("div",null,this.renderTabs(),d.default.createElement(i.FormGroup,{row:!0},d.default.createElement(i.FormControlLabel,{control:d.default.createElement(l.default,{checked:n===o,onChange:this._handle_onClick_MarkAll}),label:"Mark all as complete"})),d.default.createElement(r.default,null,t.edges.map(function(t){var n=t.node;return d.default.createElement(T.default,{key:n.id,Viewer:e,ToDo:n})}))):null}}]),t}();_.contextTypes={relay:s.default.object,router:s.default.object},t.default=(0,c.createFragmentContainer)((0,u.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,background:e.palette.background.paper}}})(_),{Viewer:function(){return n(749)}})}}]);