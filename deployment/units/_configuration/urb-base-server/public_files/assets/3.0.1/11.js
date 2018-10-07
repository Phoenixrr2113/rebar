(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{6922:function(e,n,t){"use strict";t.r(n);var o=t(195),a=t.n(o),l=t(187),i=t.n(l),r=t(217),u=t.n(r),s=t(292),c=t.n(s),d=t(114),p=t.n(d),m=t(15),f=t(117),T=t(0),g=t.n(T),y=t(12),D=t(155),k=t.n(D),_=t(20),b=function(){return t(845)};var h={commit:function(e,n,t,o,a){return Object(y.commitMutation)(e,{mutation:b,variables:{input:{ToDo_Complete:o},status:a},updater:function(e){var t=e.get(n.id),o=_.ConnectionHandler.getConnection(t,"ToDoList_ToDos",{status:a}),l=e.getRootField("ToDoListUpdateMarkAll").getLinkedRecord("Viewer").getLinkedRecord("ToDos",{status:a}).getLinkedRecords("edges");o.setLinkedRecords(l,"edges")},optimisticUpdater:function(e){var t=e.get(n.id),l=_.ConnectionHandler.getConnection(t,"ToDoList_ToDos",{status:a});(o&&"active"===a||!o&&"completed"===a)&&l.setLinkedRecords([],"edges")},optimisticResponse:function(){var e={Viewer:{id:n.id,ToDo_CompletedCount:0},changedToDos:null};return t&&t.edges&&(e.changedToDos=t.edges.filter(function(e){return e.node.ToDo_Complete!==o}).map(function(e){return{id:e.node.id,ToDo_Complete:o}})),o?null!=n.ToDo_TotalCount&&(e.Viewer.ToDo_CompletedCount=n.ToDo_TotalCount):e.Viewer.ToDo_CompletedCount=0,{ToDoListUpdateMarkAll:e}}})}},C=t(116),v=t.n(C),S=t(113),w=t.n(S),F=t(294),O=t.n(F),K=t(129),L=t.n(K),E=t(130),V=t.n(E),M=t(70),U=t.n(M),x=t(808),I=function(){return t(846)};function R(e,n,t){var o=e.get(n.id),a=t.getValue("ToDo_Complete")?"active":"completed",l=_.ConnectionHandler.getConnection(o,"ToDoList_ToDos",{status:a});l&&_.ConnectionHandler.deleteNode(l,t.getValue("id"))}var j={commit:function(e,n,t,o){return Object(y.commitMutation)(e,{mutation:I,variables:{input:{id:t.id,ToDo_Complete:o}},updater:function(e){var t=e.getRootField("ToDoUpdateStatus");R(e,n,t.getLinkedRecord("ToDo"))},optimisticUpdater:function(e){var a=e.get(t.id);a.setValue(o,"complete"),R(e,n,a);var l=e.get(n.id),i=l.getValue("ToDo_CompletedCount");null!=i&&l.setValue(i+(o?1:-1),"ToDo_CompletedCount")}})}},P=function(){return t(847)};function A(e,n,t){var o=e.get(n.id);["any","active","completed"].forEach(function(e){var n=_.ConnectionHandler.getConnection(o,"ToDoList_ToDos",{status:e});n&&_.ConnectionHandler.deleteNode(n,t)})}var $={commit:function(e,n,t){return Object(y.commitMutation)(e,{mutation:P,variables:{input:{id:t.id}},updater:function(e){var t=e.getRootField("ToDoDelete");A(e,n,t.getValue("deletedId"))},optimisticUpdater:function(e){A(e,n,t.id);var o=e.get(n.id),a=o.getValue("ToDo_TotalCount");null!=a&&o.setValue(a-1,"ToDo_TotalCount");var l=o.getValue("ToDo_CompletedCount");null!=l&&(null!=t.ToDo_Complete?t.ToDo_Complete&&o.setValue(l-1,"ToDo_CompletedCount"):null!=a&&a-1<l&&o.setValue(a-1,"ToDo_CompletedCount"))}})}},N=function(){return t(848)};var q={commit:function(e,n,t){return Object(y.commitMutation)(e,{mutation:N,variables:{input:{id:n.id,ToDo_Text:t}},optimisticResponse:function(){return{ToDoUpdateRename:{ToDo:{id:n.id,ToDo_Text:t}}}}})}},H=t(29),W=t.n(H),J=t(97),z=t.n(J),B=t(100),G=t.n(B),Q=t(99),X=t.n(Q),Y=t(98),Z=t.n(Y),ee=t(59),ne=t.n(ee);function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e,n){return!n||"object"!==te(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,n){return(ie=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var re=function(e){function n(e,t){var o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(o=ae(this,le(n).call(this,e,t)))._handle_Close=function(){o.props.handlerClose()},o._handle_OK=function(){o.props.handlerUpdate({ToDo_Text:o.state.ToDo_Text}),o.props.handlerClose()};var a=o.props.ToDo_Text;return o.state={ToDo_Text:a},o}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&ie(e,n)}(n,g.a.Component),function(e,n,t){n&&oe(e.prototype,n),t&&oe(e,t)}(n,[{key:"render",value:function(){var e=this,n=this.state.ToDo_Text;return g.a.createElement("div",null,g.a.createElement(z.a,{open:this.props.open,onClose:this._handle_Close},g.a.createElement(Z.a,null,"ToDo"),g.a.createElement(X.a,null,g.a.createElement(ne.a,{label:"To Do",fullWidth:!0,value:n,onChange:function(n){return e.setState({ToDo_Text:n.target.value})}})),g.a.createElement(G.a,null,g.a.createElement(W.a,{onClick:this._handle_Close},"Cancel"),g.a.createElement(W.a,{onClick:this._handle_OK,color:"primary"},"OK"))))}}]),n}(),ue=Object(m.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"}}})(re);function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function de(e,n){return!n||"object"!==se(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,n){return(me=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var fe=function(e){function n(e,t){var o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(o=de(this,pe(n).call(this,e,t)))._handle_onClickCheckbox=function(e,n){var t=o.props,a=t.relay,l=t.Viewer,i=t.ToDo;j.commit(a.environment,l,i,n)},o._handle_Update_Properties=function(e){var n=o.props,t=n.relay,a=n.ToDo;q.commit(t.environment,a,e.ToDo_Text)},o._handle_Close_Properties=function(){o.setState({propertiesIsOpen:!1})},o.handleClickListItem=function(e){o.setState({menuIsOpen:!0,anchorEl:e.currentTarget})},o._handle_Menu_onClick_Edit=function(e){o.setState({menuIsOpen:!1,propertiesIsOpen:!0})},o._handle_Menu_onClick_Delete=function(e){o.setState({menuIsOpen:!1});var n=o.props,t=n.relay,a=n.Viewer,l=n.ToDo;$.commit(t.environment,a,l)},o.handleRequestClose=function(){o.setState({menuIsOpen:!1})},o.state={anchorEl:void 0,menuIsOpen:!1,propertiesIsOpen:!1},o}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&me(e,n)}(n,g.a.Component),function(e,n,t){n&&ce(e.prototype,n),t&&ce(e,t)}(n,[{key:"render",value:function(){var e=this,n=this.props.ToDo,t=n.ToDo_Complete,o=n.ToDo_Text;return g.a.createElement("div",null,g.a.createElement(w.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu",onClick:function(n){return e._handle_onClickCheckbox(n,!t)}},g.a.createElement(i.a,{checked:t}),g.a.createElement(L.a,{primary:o}),g.a.createElement(O.a,null,g.a.createElement(v.a,{onClick:this.handleClickListItem},g.a.createElement(x.a,null)))),g.a.createElement(V.a,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.menuIsOpen,onClose:this.handleRequestClose},g.a.createElement(U.a,{key:"edit",onClick:function(n){return e._handle_Menu_onClick_Edit(n)}},"Edit"),g.a.createElement(U.a,{key:"delete",onClick:function(n){return e._handle_Menu_onClick_Delete(n)}},"Delete")),g.a.createElement(ue,{ToDo_Text:o,handlerUpdate:this._handle_Update_Properties,handlerClose:this._handle_Close_Properties,open:this.state.propertiesIsOpen}))}}]),n}(),Te=Object(y.createFragmentContainer)(fe,{Viewer:function(){return t(849)},ToDo:function(){return t(850)}});function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ye(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function De(e,n){return!n||"object"!==ge(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _e(e,n){return(_e=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var be=function(e){function n(){var e,t,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return De(o,(t=o=De(this,(e=ke(n)).call.apply(e,[this].concat(l))),o._handle_onClick_MarkAll=function(e,n){var t=o.props,a=t.relay,l=t.Viewer,i=o.context.relay.variables,r=n;h.commit(a.environment,l,l.ToDos,r,i.status)},o._handle_onChange=function(e,n){var t=2===n?"/todo/completed":1===n?"/todo/active":"/todo";o.context.router.push(t)},t))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_e(e,n)}(n,g.a.Component),function(e,n,t){n&&ye(e.prototype,n),t&&ye(e,t)}(n,[{key:"renderTabs",value:function(){var e=this.context.relay.variables.status,n="active"===e?1:"completed"===e?2:0;return g.a.createElement(a.a,{position:"static"},g.a.createElement(k.a,{value:n,onChange:this._handle_onChange},g.a.createElement(D.Tab,{label:"All"}),g.a.createElement(D.Tab,{label:"Active"}),g.a.createElement(D.Tab,{label:"Completed"})))}},{key:"render",value:function(){var e=this.props.Viewer,n=e.ToDos,t=e.ToDo_TotalCount,o=e.ToDo_CompletedCount;return t?g.a.createElement("div",null,this.renderTabs(),g.a.createElement(u.a,{row:!0},g.a.createElement(c.a,{control:g.a.createElement(i.a,{checked:t===o,onChange:this._handle_onClick_MarkAll}),label:"Mark all as complete"})),g.a.createElement(p.a,null,n.edges.map(function(n){var t=n.node;return g.a.createElement(Te,{key:t.id,Viewer:e,ToDo:t})}))):null}}]),n}();n.default=Object(y.createFragmentContainer)(Object(m.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,background:e.palette.background.paper}}})(Object(f.withRouter)(be)),{Viewer:function(){return t(851)}})},845:function(e,n,t){"use strict";var o=function(){var e=[{kind:"LocalArgument",name:"input",type:"ToDoListUpdateMarkAllInput!",defaultValue:null},{kind:"LocalArgument",name:"status",type:"String!",defaultValue:null}],n={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},t={kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},o=[{kind:"LinkedField",alias:null,name:"ToDoListUpdateMarkAll",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoListUpdateMarkAllInput!"}],concreteType:"ToDoListUpdateMarkAllPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"ToDos",storageKey:null,args:[{kind:"Variable",name:"status",variableName:"status",type:"String"}],concreteType:"ToDosConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"ToDosEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[n,t,{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}]}]}]},n,{kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"changedToDos",storageKey:null,args:null,concreteType:"ToDo",plural:!0,selections:[n,t]}]}];return{kind:"Request",operationKind:"mutation",name:"ToDoListUpdateMarkAllMutation",id:null,text:"mutation ToDoListUpdateMarkAllMutation(\n  $input: ToDoListUpdateMarkAllInput!\n  $status: String!\n) {\n  ToDoListUpdateMarkAll(input: $input) {\n    Viewer {\n      ToDos(status: $status) {\n        edges {\n          node {\n            id\n            ToDo_Complete\n            ToDo_Text\n          }\n        }\n      }\n      id\n      ToDo_CompletedCount\n    }\n    changedToDos {\n      id\n      ToDo_Complete\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoListUpdateMarkAllMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:o},operation:{kind:"Operation",name:"ToDoListUpdateMarkAllMutation",argumentDefinitions:e,selections:o}}}();o.hash="18b2dc6ec26946a22a0803be1ba1d2f2",e.exports=o},846:function(e,n,t){"use strict";var o=function(){var e=[{kind:"LocalArgument",name:"input",type:"ToDoUpdateStatusInput!",defaultValue:null}],n={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},t=[{kind:"LinkedField",alias:null,name:"ToDoUpdateStatus",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoUpdateStatusInput!"}],concreteType:"ToDoUpdateStatusPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[n,{kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"ToDo",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[n,{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null}]}]}];return{kind:"Request",operationKind:"mutation",name:"ToDoUpdateStatusMutation",id:null,text:"mutation ToDoUpdateStatusMutation(\n  $input: ToDoUpdateStatusInput!\n) {\n  ToDoUpdateStatus(input: $input) {\n    Viewer {\n      id\n      ToDo_CompletedCount\n    }\n    ToDo {\n      id\n      ToDo_Complete\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoUpdateStatusMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:t},operation:{kind:"Operation",name:"ToDoUpdateStatusMutation",argumentDefinitions:e,selections:t}}}();o.hash="05dd206726300c3f5a9866475072d101",e.exports=o},847:function(e,n,t){"use strict";var o=function(){var e=[{kind:"LocalArgument",name:"input",type:"ToDoDeleteInput!",defaultValue:null}],n=[{kind:"Variable",name:"input",variableName:"input",type:"ToDoDeleteInput!"}],t={kind:"ScalarField",alias:null,name:"ToDo_TotalCount",args:null,storageKey:null},o={kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null},a={kind:"ScalarField",alias:null,name:"deletedId",args:null,storageKey:null};return{kind:"Request",operationKind:"mutation",name:"ToDoDeleteMutation",id:null,text:"mutation ToDoDeleteMutation(\n  $input: ToDoDeleteInput!\n) {\n  ToDoDelete(input: $input) {\n    Viewer {\n      ToDo_TotalCount\n      ToDo_CompletedCount\n      id\n    }\n    deletedId\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoDeleteMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:[{kind:"LinkedField",alias:null,name:"ToDoDelete",storageKey:null,args:n,concreteType:"ToDoDeletePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[t,o]},a]}]},operation:{kind:"Operation",name:"ToDoDeleteMutation",argumentDefinitions:e,selections:[{kind:"LinkedField",alias:null,name:"ToDoDelete",storageKey:null,args:n,concreteType:"ToDoDeletePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[t,o,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},a]}]}}}();o.hash="a581035e0f38d5d8ad86368e6420b22c",e.exports=o},848:function(e,n,t){"use strict";var o=function(){var e=[{kind:"LocalArgument",name:"input",type:"ToDoUpdateRenameInput!",defaultValue:null}],n=[{kind:"LinkedField",alias:null,name:"ToDoUpdateRename",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoUpdateRenameInput!"}],concreteType:"ToDoUpdateRenamePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"ToDo",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}]}]}];return{kind:"Request",operationKind:"mutation",name:"ToDoUpdateRenameMutation",id:null,text:"mutation ToDoUpdateRenameMutation(\n  $input: ToDoUpdateRenameInput!\n) {\n  ToDoUpdateRename(input: $input) {\n    ToDo {\n      id\n      ToDo_Text\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoUpdateRenameMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:n},operation:{kind:"Operation",name:"ToDoUpdateRenameMutation",argumentDefinitions:e,selections:n}}}();o.hash="5ca316bc08f370bba86945985652a644",e.exports=o},849:function(e,n,t){"use strict";var o={kind:"Fragment",name:"ToDoItem_Viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}],hash:"1a7d80a3304bcbe9332edd571759ed60"};e.exports=o},850:function(e,n,t){"use strict";var o={kind:"Fragment",name:"ToDoItem_ToDo",type:"ToDo",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}],hash:"b4582da6b8371980f5147d0ea118c859"};e.exports=o},851:function(e,n,t){"use strict";var o=function(){var e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"ToDoList_Viewer",type:"Viewer",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["ToDos"]}]},argumentDefinitions:[{kind:"RootArgument",name:"status",type:"String"}],selections:[{kind:"LinkedField",alias:"ToDos",name:"__ToDoList_ToDos_connection",storageKey:null,args:[{kind:"Variable",name:"status",variableName:"status",type:"String"}],concreteType:"ToDosConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"ToDosEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[e,{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},{kind:"FragmentSpread",name:"ToDoItem_ToDo",args:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"pageInfo",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"endCursor",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"hasNextPage",args:null,storageKey:null}]}]},e,{kind:"ScalarField",alias:null,name:"ToDo_TotalCount",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_CompletedCount",args:null,storageKey:null},{kind:"FragmentSpread",name:"ToDoItem_Viewer",args:null}]}}();o.hash="68b5216db9d5b129661a98b5e2476770",e.exports=o}}]);