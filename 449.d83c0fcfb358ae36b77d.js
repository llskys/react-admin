(self.webpackChunkwebpack5_react_demo=self.webpackChunkwebpack5_react_demo||[]).push([[449],{722:()=>{},7999:(e,_,t)=>{"use strict";t.d(_,{Z:()=>l});var r,a=t(5976);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o="//at.alicdn.com/t/font_911845_p1azcplydjo.js",n=(0,a.Z)({scriptUrl:o});const l=n;var c,u;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(o,"iconfontUrl","/Users/cl/work/personal/webpack5-react-demo/src/components/Iconfont/index.tsx"),c.register(n,"default","/Users/cl/work/personal/webpack5-react-demo/src/components/Iconfont/index.tsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},3696:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LayoutBreadcrumb});var antd_es_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1462),antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4319),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7608),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9298),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5474),_defaultRoutes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9361),_class,enterModule;function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(e);if(_){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},LayoutBreadcrumb=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.Z)(LayoutBreadcrumb,_Component);var _super=_createSuper(LayoutBreadcrumb);function LayoutBreadcrumb(){var e;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.Z)(this,LayoutBreadcrumb);for(var _=arguments.length,t=new Array(_),r=0;r<_;r++)t[r]=arguments[r];return(e=_super.call.apply(_super,[this].concat(t))).unHistoryListener=void 0,e.state={breadcrumbs:[]},e.setBreadcrumb=function(){var _=e.props.history.location,t=_.pathname.split("/"),r=[];return t.length>1&&_defaultRoutes__WEBPACK_IMPORTED_MODULE_7__.Z.routes.forEach((function(e){var t;_.pathname.startsWith(e.path)&&(r.push(e),null!=e&&null!==(t=e.children)&&void 0!==t&&t.length&&e.children.forEach((function(e){_.pathname.startsWith(e.path)&&r.push(e)})))})),r},e}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__.Z)(LayoutBreadcrumb,[{key:"componentDidMount",value:function(){var e=this,_=this.props.history,t=this.setBreadcrumb();this.setState({breadcrumbs:t}),this.unHistoryListener=_.listen((function(_,t){var r=e.setBreadcrumb();e.setState({breadcrumbs:r})}))}},{key:"componentWillUnmount",value:function(){this.unHistoryListener()}},{key:"render",value:function(){var e=this.state.breadcrumbs;return react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.Z,{style:{margin:"5px 24px"}},e.map((function(e){var _;return react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.Z.Item,null,null!=e&&null!==(_=e.children)&&void 0!==_&&_.length?e.name:react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,{to:e.path},e.name))})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),LayoutBreadcrumb}(react__WEBPACK_IMPORTED_MODULE_3__.Component))||_class,reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(LayoutBreadcrumb,"LayoutBreadcrumb","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Breadcrumb.tsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},3072:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LayoutContent});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7608),antd_es_layout_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7183),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9298),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5474),_loadable_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4029),_routes__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4010),enterModule;function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(e);if(_){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Content=antd_es_layout__WEBPACK_IMPORTED_MODULE_6__.Z.Content,LayoutContent=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__.Z)(LayoutContent,_Component);var _super=_createSuper(LayoutContent);function LayoutContent(){var e;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__.Z)(this,LayoutContent);for(var _=arguments.length,t=new Array(_),r=0;r<_;r++)t[r]=arguments[r];return(e=_super.call.apply(_super,[this].concat(t))).renderRoutes=function(){return(_routes__WEBPACK_IMPORTED_MODULE_9__.Z||[]).map((function(e,_){if(e.component)return react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route,{key:_,path:e.path,exact:e.exact,name:e.name,render:function(_){var t=(0,_loadable_component__WEBPACK_IMPORTED_MODULE_5__.ZP)(e.component);return react__WEBPACK_IMPORTED_MODULE_3__.createElement(t,_)}})}))},e}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__.Z)(LayoutContent,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Content,{className:"app-container"},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"site-layout-background",style:{padding:24,textAlign:"center"}},react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch,null,this.renderRoutes(),react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect,{from:"/",to:"/home"}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),LayoutContent}(react__WEBPACK_IMPORTED_MODULE_3__.Component),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Content,"Content","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Content.tsx"),reactHotLoader.register(LayoutContent,"LayoutContent","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Content.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},128:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LayoutHeader});var antd_es_popover_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1416),antd_es_popover__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(9181),antd_es_badge_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4034),antd_es_badge__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(9166),antd_es_avatar_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2198),antd_es_avatar__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(5786),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7608),antd_es_layout_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7183),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9298),mobx_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(150),_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1351),_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(6629),_dec,_class,enterModule;function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.Z)(e);if(_){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Header=antd_es_layout__WEBPACK_IMPORTED_MODULE_7__.Z.Header,text=react__WEBPACK_IMPORTED_MODULE_6__.createElement("span",null,"Title"),content=react__WEBPACK_IMPORTED_MODULE_6__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6__.createElement("p",null,"Content"),react__WEBPACK_IMPORTED_MODULE_6__.createElement("p",null,"Content")),LayoutHeader=(_dec=(0,mobx_react__WEBPACK_IMPORTED_MODULE_8__.f3)("uiStore"),_dec(_class=(0,mobx_react__WEBPACK_IMPORTED_MODULE_8__.Pi)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__.Z)(LayoutHeader,_Component);var _super=_createSuper(LayoutHeader);function LayoutHeader(){var e;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__.Z)(this,LayoutHeader);for(var _=arguments.length,t=new Array(_),r=0;r<_;r++)t[r]=arguments[r];return(e=_super.call.apply(_super,[this].concat(t))).props=void 0,e.toggleCollapsed=function(){var _=e.props.uiStore;_.changeCollapsed(!_.collapsed)},e.renderCollap=function(){return e.props.uiStore.collapsed?react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.Z,{class:"app-trigger",onClick:e.toggleCollapsed}):react__WEBPACK_IMPORTED_MODULE_6__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.Z,{class:"app-trigger",onClick:e.toggleCollapsed})},e}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13__.Z)(LayoutHeader,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6__.createElement(Header,{className:"app-header"},this.renderCollap(),react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_popover__WEBPACK_IMPORTED_MODULE_14__.Z,{arrowPointAtCenter:!0,placement:"bottomRight",title:text,content,trigger:"click"},react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_badge__WEBPACK_IMPORTED_MODULE_15__.Z,{className:"app-avatar",count:1},react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_es_avatar__WEBPACK_IMPORTED_MODULE_16__.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),LayoutHeader}(react__WEBPACK_IMPORTED_MODULE_6__.Component))||_class)||_class),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Header,"Header","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Header.tsx"),reactHotLoader.register(text,"text","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Header.tsx"),reactHotLoader.register(content,"content","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Header.tsx"),reactHotLoader.register(LayoutHeader,"LayoutHeader","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Header.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},8449:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BaseLayout});var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(7183),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7608),_sty_less__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(722),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9298),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5474),_loadable_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4029),_SlideMenu__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(8155),_Header__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(128),_Content__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(3072),_Breadcrumb__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(3696),_class,enterModule;function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(e);if(_){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},BaseLayout=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__.Z)(BaseLayout,_Component);var _super=_createSuper(BaseLayout);function BaseLayout(e){var _;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__.Z)(this,BaseLayout),(_=_super.call(this,e)).props=void 0,_.state=void 0,_.renderRoutes=function(){return(routes||[]).map((function(e,_){if(e.component)return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route,{key:_,path:e.path,exact:e.exact,name:e.name,render:function(_){var t=(0,_loadable_component__WEBPACK_IMPORTED_MODULE_6__.ZP)(e.component);return react__WEBPACK_IMPORTED_MODULE_4__.createElement(t,_)}})}))},_.state={pathname:"/home"},_}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__.Z)(BaseLayout,[{key:"render",value:function(){this.state.pathname;return react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"app-layout"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_SlideMenu__WEBPACK_IMPORTED_MODULE_11__.Z,null),react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"site-layout"},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Header__WEBPACK_IMPORTED_MODULE_12__.Z,null),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Breadcrumb__WEBPACK_IMPORTED_MODULE_13__.Z,null),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Content__WEBPACK_IMPORTED_MODULE_14__.Z,null)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),BaseLayout}(react__WEBPACK_IMPORTED_MODULE_4__.Component))||_class,reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(BaseLayout,"BaseLayout","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Layout.tsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},573:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Logo});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7608),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9298),enterModule;function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.Z)(e);if(_){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Logo=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.Z)(Logo,_Component);var _super=_createSuper(Logo);function Logo(){return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.Z)(this,Logo),_super.apply(this,arguments)}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__.Z)(Logo,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"app-logo"},react__WEBPACK_IMPORTED_MODULE_2__.createElement("img",{src:"https://tva1.sinaimg.cn/large/008i3skNly1gqc704hpilj305k05kt92.jpg"}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Logo}(react__WEBPACK_IMPORTED_MODULE_2__.Component),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(Logo,"Logo","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/Logo.tsx"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},8155:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>SlideMenu});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2122),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(6610),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(5991),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(379),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6070),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7608),antd_es_menu_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8954),antd_es_menu__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6645),antd_es_layout_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1867),antd_es_layout__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7183),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9298),mobx_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(150),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5474),components_Iconfont__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(7999),_Logo__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(573),_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9361),_dec,_class,enterModule;function _createSuper(e){var _=_isNativeReflectConstruct();return function(){var t,r=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(e);if(_){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.Z)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Sider=antd_es_layout__WEBPACK_IMPORTED_MODULE_6__.Z.Sider,SubMenu=antd_es_menu__WEBPACK_IMPORTED_MODULE_7__.Z.SubMenu,SlideMenu=(_dec=(0,mobx_react__WEBPACK_IMPORTED_MODULE_8__.f3)("uiStore"),(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(_class=_dec(_class=(0,mobx_react__WEBPACK_IMPORTED_MODULE_8__.Pi)(_class=function(_Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__.Z)(SlideMenu,_Component);var _super=_createSuper(SlideMenu);function SlideMenu(e){var _;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__.Z)(this,SlideMenu),(_=_super.call(this,e)).props=void 0,_.state=void 0,_.renderMenus=function(){if(!_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__.Z.routes||!_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__.Z.routes.length)return null;var e=_.state.openKeys,t=_.props.history,r=_defaultRoutes__WEBPACK_IMPORTED_MODULE_11__.Z.routes;return react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_7__.Z,{theme:"dark",mode:"inline",selectedKeys:[t.location.pathname],openKeys:e,onSelect:_.handleMenuSelect,onOpenChange:_.onOpenChange},_.renderMenuItems(r))},_.renderMenuItems=function(e){return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,null,e.map((function(e){return r=(t=e).path,a=t.icon,o=t.name,n=t.children,l={key:r,icon:a?react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_Iconfont__WEBPACK_IMPORTED_MODULE_12__.Z,{type:a}):null},null!=n&&n.length?react__WEBPACK_IMPORTED_MODULE_4__.createElement(SubMenu,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_13__.Z)({},l,{title:o}),_.renderMenuItems(n)):react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_7__.Z.Item,l,o);var t,r,a,o,n,l})))},_.handleMenuSelect=function(e){e.item;var t=e.key,r=(e.keyPath,e.selectedKeys,e.domEvent,_.props.history);t!==r.location.pathname&&r.push(t)},_.handleOpenKeys=function(){var e=_.props.history.location.pathname.split("/");switch(e.length){case 2:_.setState({openKeys:[]});break;case 3:_.setState({openKeys:[e.slice(0,2).join("/")]})}},_.onOpenChange=function(e){_.setState({openKeys:e})},_.state={openKeys:[]},_}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__.Z)(SlideMenu,[{key:"componentDidMount",value:function(){this.handleOpenKeys()}},{key:"render",value:function(){var e=this.props.uiStore.collapsed;return react__WEBPACK_IMPORTED_MODULE_4__.createElement(Sider,{trigger:null,className:"app-slide",collapsible:!0,collapsed:e},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Logo__WEBPACK_IMPORTED_MODULE_15__.Z,null),this.renderMenus())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SlideMenu}(react__WEBPACK_IMPORTED_MODULE_4__.Component))||_class)||_class)||_class),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Sider,"Sider","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/SlideMenu.tsx"),reactHotLoader.register(SubMenu,"SubMenu","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/SlideMenu.tsx"),reactHotLoader.register(SlideMenu,"SlideMenu","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/SlideMenu.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},9361:(e,_,t)=>{"use strict";var r;t.d(_,{Z:()=>o}),e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a={routes:[{path:"/home",name:"主页",icon:"icon-tongji",children:[]},{path:"/article",name:"一级菜单",icon:"icon-tixian1",children:[{path:"/article/demopage1",name:"demoPage1",icon:null}]},{path:"/set",name:"一级菜单",icon:"icon-renwuguanli1",children:[{path:"/set/demopage2",name:"demoPage2",icon:null}]}]};const o=a;var n,l;(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(a,"default","/Users/cl/work/personal/webpack5-react-demo/src/components/Layout/_defaultRoutes.ts"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}}]);