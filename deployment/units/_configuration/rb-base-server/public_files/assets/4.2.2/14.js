(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1003:function(e,n,a){"use strict";const l={kind:"Fragment",name:"InscriptioScreen_Viewer",type:"Viewer",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["Inscriptios"]}]},argumentDefinitions:[],selections:[{kind:"LinkedField",alias:"Inscriptios",name:"__InscriptioScreen_Inscriptios_connection",storageKey:null,args:null,concreteType:"InscriptiosConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"InscriptiosEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Inscriptio",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Inscriptio_LocationLat",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Inscriptio_LocationLon",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"pageInfo",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"endCursor",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"hasNextPage",args:null,storageKey:null}]}]}],hash:"92c961c1febe672713cf4ec57908046b"};e.exports=l},1946:function(e,n,a){"use strict";a.r(n);var l=a(46),t=a(47),r=a(161),i=a(4),s=a(0),o=a.n(s),c=a(286),u=a(12),d=a(26),m=a(226);const p=Object(c.withScriptjs)(Object(c.withGoogleMap)(e=>o.a.createElement(c.GoogleMap,{defaultZoom:e.defaultZoom,center:e.center},e.markers.map((e,n)=>o.a.createElement(c.Marker,{key:n,position:e.position})))));n.default=Object(u.createFragmentContainer)(Object(i.a)({card:{minWidth:275,minHeight:400}})(class extends o.a.Component{constructor(e,n){super(e,n),this.isUnmounted=!1,this.state={center:{lat:34.0522,lng:-118.243},markers:[]}}render(){const{classes:e}=this.props;return o.a.createElement(d.a,null,o.a.createElement(l.a,{className:e.card},o.a.createElement(r.a,{title:"Inscriptio"}),o.a.createElement(t.a,null,o.a.createElement(m.a.Consumer,null,e=>{const n=e.webapp.api.googleMapsJavascriptAPI;return o.a.createElement(p,{defaultZoom:16,center:this.state.center,content:"Content here",googleMapURL:n,markers:this.state.markers,loadingElement:o.a.createElement("div",null,"Loading..."),containerElement:o.a.createElement("div",{style:{height:400}}),mapElement:o.a.createElement("div",{style:{height:400}})})}))))}}),{Viewer:function(){return a(1003)}})}}]);