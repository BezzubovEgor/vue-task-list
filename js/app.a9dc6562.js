(function(t){function e(e){for(var o,s,c=e[0],i=e[1],u=e[2],p=0,d=[];p<c.length;p++)s=c[p],r[s]&&d.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-task-list/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0237":function(t,e,n){},"06ba":function(t,e,n){t.exports=n.p+"img/todoDetails.40d2f5ac.svg"},"0761":function(t,e,n){"use strict";var o=n("e6b6"),r=n.n(o);r.a},"07ba":function(t,e,n){},"0a7f":function(t,e,n){"use strict";var o=n("1301"),r=n.n(o);r.a},"0ad1":function(t,e,n){"use strict";var o=n("ea2c"),r=n.n(o);r.a},"0baf":function(t,e,n){"use strict";var o=n("e926"),r=n.n(o);r.a},"0f62":function(t,e,n){"use strict";var o=n("d362"),r=n.n(o);r.a},1009:function(t,e,n){"use strict";var o=n("7e43"),r=n.n(o);r.a},"105a":function(t,e,n){},1301:function(t,e,n){},1326:function(t,e,n){"use strict";var o=n("7c1a"),r=n.n(o);r.a},"1b04":function(t,e,n){"use strict";var o=n("669a"),r=n.n(o);r.a},"1ba7":function(t,e,n){},"1f5c":function(t,e,n){},2057:function(t,e,n){},2089:function(t,e,n){"use strict";var o=n("f225"),r=n.n(o);r.a},"21e9":function(t,e,n){},2314:function(t,e,n){"use strict";var o=n("e2b9"),r=n.n(o);r.a},"27b9":function(t,e,n){},"2ad1":function(t,e,n){},3062:function(t,e,n){"use strict";var o=n("1ba7"),r=n.n(o);r.a},"30b7":function(t,e,n){},"38e0":function(t,e,n){"use strict";var o=n("a623"),r=n.n(o);r.a},"46f7":function(t,e,n){},"4dff":function(t,e,n){"use strict";var o=n("0237"),r=n.n(o);r.a},"4e3e":function(t,e,n){"use strict";var o=n("7a5a"),r=n.n(o);r.a},"56c5":function(t,e,n){"use strict";var o=n("2ad1"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.loaded?n("TheLayout",{scopedSlots:t._u([{key:"content",fn:function(){return[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)]},proxy:!0},{key:"footer",fn:function(){return[n("TheFooter",{attrs:{menu:t.mainMenu}})]},proxy:!0}],null,!1,3882775244)}):t._e()],1)},s=[],c=n("cebc"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout d-flex flex-column justify-content-between align-items-center"},[t._t("header"),n("div",{staticClass:"container-fluid content flex-grow-1"},[t._t("content")],2),t._t("footer")],2)},u=[],l={name:"TheLayout"},p=l,d=(n("2089"),n("2877")),f=Object(d["a"])(p,i,u,!1,null,"6792d134",null),m=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-5 col-md-7 col-sm-9 d-flex justify-content-between"},[n("AppButton",{staticClass:"bars-button",attrs:{mode:"default-secondary"},on:{click:function(e){t.isMenuOpen=!0}}},[n("i",{staticClass:"fas fa-bars"})])],1)]),n("AppModal",{attrs:{footer:!1,isOpen:t.isMenuOpen},on:{close:function(e){t.isMenuOpen=!1}}},[n("AppMenu",{attrs:{menu:t.menu},on:{select:function(e){t.isMenuOpen=!1}}})],1)],1)},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._b({class:t.classByMode,on:{click:function(e){return t.$emit("click",e)}}},"button",t.$props,!1),[t._t("default")],2)},j=[],g={default:"default","default-secondary":"default secondary",primary:"btn btn-primary d-flex align-items-center primary"},O={name:"AppButton",props:{type:{default:"button",type:String},mode:{default:"default",type:String}},computed:{classByMode:function(){return g[this.mode]}}},_=O,x=(n("cc55"),Object(d["a"])(_,b,j,!1,null,"4f5aedd5",null)),y=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FadeInOut",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"app-modal-overflow",on:{click:function(e){return t.$emit("close")}}})]),n("FadeUp",[t.isOpen?n("div",{staticClass:"app-modal-wrapper container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"app-modal",class:t.modalClass},[t._t("default"),t.footer?n("div",{staticClass:"app-modal-footer d-flex justify-content-end"},[n("a",{on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[t._v("Close")])]):t._e()],2)])]):t._e()])],1)},w=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t._t("default")],2)},$=[],C={name:"FadeInOut"},T=C,E=(n("1b04"),Object(d["a"])(T,A,$,!1,null,"117ad39b",null)),D=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-up"}},[t._t("default")],2)},I=[],F={name:"FadeUp"},L=F,P=(n("0a7f"),Object(d["a"])(L,S,I,!1,null,"eaececf0",null)),R=P.exports,B={name:"AppModal",components:{FadeInOut:D,FadeUp:R},props:{isOpen:Boolean,footer:{default:!0,type:Boolean},modalClass:{default:"col-12 col-sm-9 col-md-7 col-lg-5",type:String}},created:function(){document.addEventListener("backbutton",this.closeEventHandler)},destroyed:function(){document.removeEventListener("backbutton",this.closeEventHandler)},methods:{closeEventHandler:function(){this.$emit("close")}}},M=B,N=(n("fb3e"),Object(d["a"])(M,k,w,!1,null,"40dc611a",null)),G=N.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-group text-left"},t._l(t.menu,function(e,o){return n("router-link",{key:e.key||o,staticClass:"list-group-item list-group-item-action",attrs:{to:e.to},nativeOn:{click:function(n){return t.$emit("select",e.key)}}},[n("i",{class:e.icon}),t._v(" "+t._s(e.title))])}),1)},J=[],H={name:"AppMenu",props:{menu:Array}},V=H,K=(n("38e0"),Object(d["a"])(V,U,J,!1,null,"32770e04",null)),q=K.exports,z={name:"TheFooter",components:{AppButton:y,AppModal:G,AppMenu:q},props:{menu:Array},data:function(){return{isMenuOpen:!1}}},W=z,Y=(n("3062"),Object(d["a"])(W,v,h,!1,null,"5de703f2",null)),Q=Y.exports,X=n("2f62"),Z=n("5935"),tt=(n("96cf"),n("3b8d")),et=n("bd86"),nt=(n("6b54"),n("7514"),n("3f4f")),ot=2,rt="vue-task-list";function at(){return st.apply(this,arguments)}function st(){return st=Object(tt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("indexedDB"in window){t.next=2;break}throw new Error("YOur brouser does not supports indexedDB");case 2:return t.abrupt("return",Object(nt["a"])(rt,ot,{upgrade:function(t){t.objectStoreNames.contains("projects")||t.createObjectStore("projects"),t.objectStoreNames.contains("todos")||t.createObjectStore("todos")}}));case 3:case"end":return t.stop()}},t)})),st.apply(this,arguments)}function ct(t){return it.apply(this,arguments)}function it(){return it=Object(tt["a"])(regeneratorRuntime.mark(function t(e){var n,o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,at();case 2:return n=t.sent,o=n.transaction(e,"readonly"),r=o.objectStore(e),t.next=7,r.get(e);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}},t)})),it.apply(this,arguments)}function ut(t,e){return lt.apply(this,arguments)}function lt(){return lt=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){var o,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,at();case 2:return o=t.sent,r=o.transaction(e,"readwrite"),a=r.objectStore(e),a.put(n,e),t.next=8,r.oncomplete;case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},t)})),lt.apply(this,arguments)}var pt,dt,ft,mt,vt="SET_PROJECTS",ht="REMOVE_PROJECT",bt="ADD_PROJECT",jt="LOAD_PROJECTS",gt="SAVE_PROJECTS",Ot="TOGGLE_MARK_PROJECT",_t="ADD_TODO",xt="TOGGLE_TODO",yt="REMOVE_TODO",kt="MOVE_TODO",wt="SET_TODOS",At="LOAD_TODOS",$t="SAVE_TODOS",Ct="SET_TODO_FORM",Tt="SAVE_TODO_FORM",Et={projects:[],projectsLoaded:!1},Dt={getProjectById:function(t){return function(e){return t.projects.find(function(t){var n=t.id;return n===e})}},projects:function(t,e){var n=e.getProjectTodos;return t.projects.map(function(t){return Object(c["a"])({},t,{todo:n(t.id).filter(function(t){var e=t.done;return!e}).length,done:n(t.id).filter(function(t){var e=t.done;return e}).length})})},isMarkMode:function(t){return t.projects.some(function(t){return t.marked})}},St=(pt={},Object(et["a"])(pt,vt,function(t,e){t.projects=e,t.projectsLoaded=!0}),Object(et["a"])(pt,ht,function(t,e){t.projects=t.projects.filter(function(t){return t.id!==e})}),Object(et["a"])(pt,Ot,function(t,e){var n=t.projects.find(function(t){return t.id===e});o["a"].set(n,"marked",!n.marked)}),Object(et["a"])(pt,bt,function(t,e){t.projects.unshift(Object(c["a"])({},e,{todos:[],id:(new Date).getTime().toString()}))}),pt),It=(dt={},Object(et["a"])(dt,ht,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit(ht,n),t.next=3,e.dispatch(gt);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(et["a"])(dt,bt,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit(bt,n),t.next=3,e.dispatch(gt);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(et["a"])(dt,jt,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct("projects");case 2:n=t.sent,e.commit(vt,n||[]);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(et["a"])(dt,gt,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut("projects",e.state.projects);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(et["a"])(dt,Ot,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.commit(Ot,n);case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),dt),Ft={state:Et,getters:Dt,mutations:St,actions:It},Lt=(n("20d6"),{todos:[],todoForm:{},todosLoaded:!1}),Pt={getProjectTodoById:function(t){return function(e,n){return t.todos.find(function(t){var o=t.id,r=t.projectId;return o===e&&r===n})}},getProjectTodos:function(t){return function(e){return t.todos.filter(function(t){var n=t.projectId;return n===e})}},todoForm:function(t){return t.todoForm}},Rt=(ft={},Object(et["a"])(ft,wt,function(t,e){t.todos=e,t.todosLoaded=!0}),Object(et["a"])(ft,_t,function(t,e){var n=Object(c["a"])({},e,{done:!1,id:Date.now().toString()});t.todos.unshift(n)}),Object(et["a"])(ft,xt,function(t,e){var n=t.todos.find(function(t){var n=t.id;return n===e});n.done=!n.done}),Object(et["a"])(ft,yt,function(t,e){t.todos=t.todos.filter(function(t){var n=t.id;return n!==e})}),Object(et["a"])(ft,kt,function(t,e){var n=e.projectId,o=e.todoId,r=t.todos.find(function(t){var e=t.id;return e===o});r.projectId=n}),Object(et["a"])(ft,Ct,function(t,e){t.todoForm=t.todos.find(function(t){var n=t.id;return n===e})}),Object(et["a"])(ft,Tt,function(t,e){o["a"].set(t.todos,t.todos.findIndex(function(t){var n=t.id;return n===e}),t.todoForm),t.todoId={}}),ft),Bt=(mt={},Object(et["a"])(mt,_t,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit(_t,n),t.next=3,e.dispatch($t);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(et["a"])(mt,xt,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit(xt,n),t.next=3,e.dispatch($t);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(et["a"])(mt,yt,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit(yt,n),t.next=3,e.dispatch($t);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(et["a"])(mt,kt,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit(kt,n),t.next=3,e.dispatch($t);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(et["a"])(mt,Ct,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.commit(Ct,n);case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(et["a"])(mt,Tt,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.commit(Tt);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(et["a"])(mt,At,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct("todos");case 2:n=t.sent,e.commit(wt,n||[]);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(et["a"])(mt,$t,function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut("todos",e.state.todos);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),mt),Mt={state:Lt,getters:Pt,mutations:Rt,actions:Bt};o["a"].use(X["a"]);var Nt={},Gt={loaded:function(t){return t.projects.projectsLoaded&&t.todos.todosLoaded},getField:Z["a"]},Ut={updateField:Z["c"]},Jt={},Ht=new X["a"].Store({strict:!1,state:Nt,getters:Gt,mutations:Ut,actions:Jt,modules:{projects:Ft,todos:Mt}}),Vt=Ht,Kt=(n("ac6a"),n("8615"),n("75fc")),qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPage",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Your projects")]},proxy:!0},{key:"footer",fn:function(){return[n("ProjectFooter")]},proxy:!0}])},[n("ProjectList")],1)},zt=[],Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page row d-flex flex-column justify-content-between align-items-center flex-nowrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.actions,expression:"$slots.actions"}],staticClass:"actions"},[n("div",{staticClass:"row m-0 justify-content-center"},[n("div",{staticClass:"p-2 col-sm-10 col-md-7 col-lg-5"},[t._t("actions")],2)])]),n("div",{staticClass:"content pb-4 flex-grow-1 col-sm-10 col-md-7 col-lg-5 text-left"},[n("h1",{staticClass:"mt-3 ml-3"},[t._t("header")],2),n("div",{staticClass:"body"},[t._t("default")],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.footer,expression:"$slots.footer"}],staticClass:"footer"},[t._t("footer")],2)])},Yt=[],Qt={name:"AppPage"},Xt=Qt,Zt=(n("0baf"),Object(d["a"])(Xt,Wt,Yt,!1,null,"b8b23f0e",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppBackground",{attrs:{src:n("6eed")}},[o("transition-group",{staticClass:"row",attrs:{name:"fade",appear:""}},t._l(t.projects,function(e){return o("ProjectListItem",t._b({key:e.id,staticClass:"col-6 p-0",on:{select:function(n){return t.select(e.id)},mark:function(n){return t.toggleMark(e.id)}}},"ProjectListItem",e,!1))}),1)],1)},ne=[],oe=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FadeInOut",{attrs:{appear:""}},[t.show?n("div",{staticClass:"image-container d-flex justify-content-center align-items-center"},[n("div",{staticClass:"col-sm-11 col-md-6 col-lg-4"},[n("img",{staticClass:"image",attrs:{src:t.src}})])]):t._e()]),t._t("default")],2)}),re=[],ae={components:{FadeInOut:D},props:{show:{type:Boolean,default:!0},src:[Object,String]}},se=ae,ce=(n("fc8b"),Object(d["a"])(se,oe,re,!1,null,"519aa9e5",null)),ie=ce.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AppCard",{staticClass:"m-1",class:{marked:t.marked},attrs:{interactive:""},on:{select:function(e){return t.$emit("select")},mark:function(e){return t.$emit("mark")}},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(t._s(t.name))]},proxy:!0}])},[n("div",[t._v("\n      To Do:\n      "),n("span",{staticClass:"badge"},[t._v(t._s(t.todo))])]),n("div",[t._v("\n      Done:\n      "),n("span",{staticClass:"badge"},[t._v(t._s(t.done))])])])],1)},le=[],pe=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"longpress",rawName:"v-longpress"}],staticClass:"card",class:{interactive:t.interactive},attrs:{tabindex:t.interactive&&0,onselectstart:"return false;"},on:{"longpress-end":t.mark,"longpress-click":t.onClick,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}}},[n("div",{staticClass:"card-body"},[t.$slots.header?n("h5",{staticClass:"card-title"},[t._t("header")],2):t._e(),t._t("default")],2)])}),de=[],fe=function(){},me={bind:function(t,e,n){var o=e.value,r=void 0===o?1e3:o,a=n.data,s=a.on,c=void 0===s?{}:s,i=c["longpress-start"]||fe,u=c["longpress-end"]||fe,l=c["longpress-click"]||fe,p=function(e){"click"===e.type&&0!==e.button||null===t.$_timer&&(i(),t.$_timer=setTimeout(function(){u(),f()},r))},d=function(e){e.stopPropagation(),e.preventDefault(),null!==t.$_timer&&(l(),f())},f=function(){clearTimeout(t.$_timer),t.$_timer=null};return t.$_timer=null,t.$_start_long_press=p,t.$_cancel_long_press=d,t.addEventListener("mousedown",p),t.addEventListener("touchstart",p,{passive:!0}),["click","mouseout","touchend","touchcancel"].forEach(function(e){return t.addEventListener(e,d)}),!1},unbind:function(t){clearTimeout(t.$_timer),t.removeEventListener("mousedown",t.$_start_long_press),t.removeEventListener("touchstart",t.$_start_long_press,{passive:!0}),["click","mouseout","touchend","touchcancel"].forEach(function(e){return t.removeEventListener(e,t.$_cancel_long_press)})}},ve={props:{interactive:Boolean},directives:{longpress:me},methods:{onClick:function(){this.$emit("click"),this.$emit("select")},onEnter:function(){this.$emit("select")},mark:function(){this.$el.blur(),this.$emit("mark")}}},he=ve,be=(n("ee82"),Object(d["a"])(he,pe,de,!1,null,"070daf11",null)),je=be.exports,ge={components:{AppCard:je},props:{name:String,todo:Number,done:Number,marked:Boolean}},Oe=ge,_e=(n("2314"),Object(d["a"])(Oe,ue,le,!1,null,"543b2681",null)),xe=_e.exports,ye={components:{AppBackground:ie,ProjectListItem:xe},methods:Object(c["a"])({},Object(X["b"])({toggleMark:Ot}),{select:function(t){this.isMarkMode?this.toggleMark(t):this.$router.push({name:Uo.PROJECT.name,params:{projectId:t}})}}),computed:Object(c["a"])({},Object(X["c"])(["projects","isMarkMode"]))},ke=ye,we=(n("0761"),Object(d["a"])(ke,ee,ne,!1,null,"28b9194f",null)),Ae=we.exports,$e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-footer d-flex justify-content-center"},[n("AppAddButton",{on:{click:function(e){t.isFormOpen=!0}}}),n("AppModal",{attrs:{isOpen:t.isFormOpen,footer:!1},on:{close:function(e){t.isFormOpen=!1}}},[n("ProjectForm",{on:{add:t.add}})],1)],1)},Ce=[],Te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppButton",{staticClass:"app-add-button__button",attrs:{mode:"primary"},on:{click:function(e){return t.$emit("click")}}})},Ee=[],De={name:"AppAddButton",components:{AppButton:y}},Se=De,Ie=(n("0f62"),Object(d["a"])(Se,Te,Ee,!1,null,"45a42970",null)),Fe=Ie.exports,Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"project-form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"form-group mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control project-form-input",attrs:{placeholder:"What project are you want to create?",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"form-controls d-flex justify-content-end mt-2"},[n("AppButton",{attrs:{type:"submit"}},[t._v("Save")])],1)])},Pe=[],Re={inserted:function(t){t.focus()}},Be={components:{AppButton:y},props:{project:Object},data:function(){return{name:""}},directives:{focus:Re},methods:{submit:function(){this.name&&(this.$emit("add",{name:this.name}),this.name="")}}},Me=Be,Ne=(n("4e3e"),Object(d["a"])(Me,Le,Pe,!1,null,"b43ba59e",null)),Ge=Ne.exports,Ue={components:{AppAddButton:Fe,AppModal:G,ProjectForm:Ge},data:function(){return{isFormOpen:!1}},methods:Object(c["a"])({},Object(X["b"])([bt]),{add:function(t){this.$data.isFormOpen=!1,this[bt](t)}})},Je=Ue,He=(n("ae61"),Object(d["a"])(Je,$e,Ce,!1,null,"46f8bfa4",null)),Ve=He.exports,Ke={components:{AppPage:te,ProjectList:Ae,ProjectFooter:Ve}},qe=Ke,ze=Object(d["a"])(qe,qt,zt,!1,null,null,null),We=ze.exports,Ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.project?n("AppPage",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("AppDetailsActions",{on:{back:function(e){return t.$router.back()},remove:t.removeSelectedProject}})]},proxy:!0},{key:"header",fn:function(){return[t._v(t._s(t.project.name))]},proxy:!0},{key:"footer",fn:function(){return[n("ToDoFooter")]},proxy:!0}],null,!1,3677307488)},[n("ToDoList",{staticClass:"mt-3 todo-list",attrs:{todos:t.todos},on:{toggle:t.toggleToDo,open:t.openToDo}})],1):t._e()},Qe=[],Xe=(n("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-between actions px-2 pt-3 pb-1"},[n("AppButton",{attrs:{mode:"default-secondary"},on:{click:function(e){return t.$emit("back")}}},[n("i",{staticClass:"fas fa-chevron-left"})]),n("AppButton",{attrs:{mode:"default-secondary"},on:{click:function(e){return t.$emit("remove")}}},[n("i",{staticClass:"far fa-trash-alt"})])],1)}),Ze=[],tn={name:"AppDetailsActions",components:{AppButton:y}},en=tn,nn=(n("1326"),Object(d["a"])(en,Xe,Ze,!1,null,"2cf704d0",null)),on=nn.exports,rn=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppBackground",{attrs:{src:n("ef0e")}},[t.todos.length?o("AppListGroup",[o("transition-group",{attrs:{name:"fade",appear:""}},t._l(t.todos,function(e){return o("AppListGroupItem",{key:e.id},[o("ToDoListItem",t._b({on:{toggle:function(n){return t.$emit("toggle",e.id)},click:function(n){return t.$emit("open",e.id)}}},"ToDoListItem",e,!1))],1)}),1)],1):t._e()],1)},an=[],sn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-group"},[t._t("default")],2)},cn=[],un={name:"AppListGroup"},ln=un,pn=Object(d["a"])(ln,sn,cn,!1,null,"73d8afdd",null),dn=pn.exports,fn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-group-item p-3",class:t.className},[t._t("default")],2)},mn=[],vn={name:"AppListGroupItem",props:{className:{default:"text-left",type:String}}},hn=vn,bn=(n("e1a3"),Object(d["a"])(hn,fn,mn,!1,null,"ffcd43a6",null)),jn=bn.exports,gn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item d-flex",class:t.todoClass,on:{click:function(e){return t.$emit("click")}}},[n("AppCheckbox",{attrs:{value:t.done},on:{click:function(e){return t.$emit("toggle")}},nativeOn:{click:function(t){t.stopPropagation()}}}),n("div",{staticClass:"text-wrapper"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.description,expression:"description"}],staticClass:"desc mt-1"},t._l(t.descriptionLines,function(e,o){return n("div",{key:o,staticClass:"desc-line"},[t._v(t._s(e))])}),0)])],1)},On=[],_n=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{on:{click:function(e){return t.$emit("click",!t.value)}}},[n("span",{staticClass:"checkbox",class:{checked:this.value}},[n("i",{staticClass:"fas fa-check"})])])}),xn=[],yn={name:"AppCheckbox",props:{value:Boolean}},kn=yn,wn=(n("fb2a"),Object(d["a"])(kn,_n,xn,!1,null,"09e3615d",null)),An=wn.exports,$n={name:"ToDoListItem",components:{AppCheckbox:An},props:{title:{type:String,required:!0},description:String,done:Boolean},computed:{todoClass:function(){return{done:this.done}},descriptionLines:function(){if(this.description)return this.description.split("\n").slice(0,2)}}},Cn=$n,Tn=(n("ea8e"),Object(d["a"])(Cn,gn,On,!1,null,"9132c826",null)),En=Tn.exports,Dn={name:"ToDoList",components:{AppListGroup:dn,AppListGroupItem:jn,AppBackground:ie,ToDoListItem:En},props:{todos:{type:Array,required:!0}},mixins:[]},Sn=Dn,In=(n("9263"),Object(d["a"])(Sn,rn,an,!1,null,"541be9ad",null)),Fn=In.exports,Ln=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-footer d-flex justify-content-center"},[n("div",{staticClass:"add-button d-flex justify-content-center"},[n("AppButton",{attrs:{mode:"primary"},on:{click:function(e){t.isFormOpen=!0}}},[n("span",{staticClass:"plus pr-3"},[t._v("+")]),t._v(" New task\n    ")])],1),n("AppModal",{attrs:{isOpen:t.isFormOpen,footer:!1},on:{close:function(e){t.isFormOpen=!1}}},[n("ToDoForm",{on:{add:t.add}})],1)],1)},Pn=[],Rn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"todo-form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"form-group mb-0"},[n("AppInput",{attrs:{placeholder:"What are you want to do?",required:"",focus:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("FadeUp",[t.showDescription?n("div",{staticClass:"form-group description"},[n("AppTextarea",{ref:"description",attrs:{maxHeight:250,placeholder:"Describe your task"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1):t._e()]),n("div",{staticClass:"form-controls d-flex justify-content-between mt-2"},[n("AppButton",{on:{click:t.openDescription}},[n("i",{staticClass:"fas fa-align-left"})]),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")])],1)],1)},Bn=[],Mn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._b({directives:[{name:"focus",rawName:"v-focus",value:t.focus,expression:"focus"}],class:"form-control app-form-input "+(t.$props.class||""),domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$props,!1))},Nn=[],Gn={name:"AppInput",props:{value:[String,Number],focus:Boolean},directives:{focus:Re}},Un=Gn,Jn=(n("bd66"),Object(d["a"])(Un,Mn,Nn,!1,null,"2fbad2ed",null)),Hn=Jn.exports,Vn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",t._b({directives:[{name:"focus",rawName:"v-focus",value:t.focus,expression:"focus"}],class:"form-control app-form-input "+(t.$props.class||""),attrs:{rows:"1"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"textarea",t.$props,!1))},Kn=[],qn={name:"AppTextarea",props:{value:[String,Number],focus:Boolean,maxHeight:Number},directives:{focus:Re},methods:{resizeTextarea:function(t){var e=t.target;e.style.height="auto",this.maxHeight&&e.scrollHeight>this.maxHeight?e.style.height=this.maxHeight+"px":e.style.height=e.scrollHeight+"px"}},mounted:function(){this.$el.scrollTo(0,0),this.$el.addEventListener("input",this.resizeTextarea),this.resizeTextarea({target:this.$el})},beforeDestroy:function(){this.$el.removeEventListener("input",this.resizeTextarea)}},zn=qn,Wn=(n("0ad1"),Object(d["a"])(zn,Vn,Kn,!1,null,"5a68ca34",null)),Yn=Wn.exports,Qn={name:"ToDoForm",components:{FadeUp:R,AppButton:y,AppInput:Hn,AppTextarea:Yn},props:{todo:Object},data:function(){return{title:"",description:"",showDescription:!1}},methods:{submit:function(){this.title&&(this.$emit("add",{title:this.title,description:this.description}),this.title="")},openDescription:function(){var t=this;this.showDescription=!0,this.$nextTick(function(){return t.$refs.description.$el.focus()})}}},Xn=Qn,Zn=Object(d["a"])(Xn,Rn,Bn,!1,null,"5e12da7d",null),to=Zn.exports,eo={components:{ToDoForm:to,AppButton:y,AppModal:G},data:function(){return{isFormOpen:!1}},methods:Object(c["a"])({},Object(X["b"])([_t]),{add:function(t){var e=this.$router.currentRoute.params.projectId;this.$data.isFormOpen=!1,this[_t](Object(c["a"])({},t,{projectId:e}))}})},no=eo,oo=(n("1009"),Object(d["a"])(no,Ln,Pn,!1,null,"d2c76e7c",null)),ro=oo.exports,ao={name:"ToDoPage",components:{AppPage:te,AppDetailsActions:on,ToDoList:Fn,ToDoFooter:ro},props:{projectId:String},created:function(){this.checkProject()},watch:{projectId:"checkProject"},computed:{project:function(){return this.$store.getters.getProjectById(this.projectId)},todos:function(){return this.$store.getters.getProjectTodos(this.projectId)}},methods:Object(c["a"])({},Object(X["b"])({toggleToDo:xt,removeToDo:ht}),{checkProject:function(){this.project||this.$router.replace(Uo.NOT_FOUND.path)},removeSelectedProject:function(){this.$router.back(),this.removeToDo(this.projectId)},openToDo:function(t){this.$router.push({name:Uo.TODO_DETAILS.name,params:{projectId:this.projectId,todoId:t}})}})},so=ao,co=(n("8410"),Object(d["a"])(so,Ye,Qe,!1,null,"49abe852",null)),io=co.exports,uo=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.todoForm?o("AppPage",{scopedSlots:t._u([{key:"actions",fn:function(){return[o("AppDetailsActions",{on:{back:function(e){return t.$router.back()},remove:t.remove}})]},proxy:!0}],null,!1,1281055255)},[o("AppBackground",{attrs:{src:n("06ba")}},[o("ToDoDetailsForm")],1)],1):t._e()},lo=[],po=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-details-form"},[n("AppSelector",{attrs:{options:t.projects,valueKey:"id",labelKey:"name"},model:{value:t.projectId,callback:function(e){t.projectId=e},expression:"projectId"}}),n("AppTextarea",{ref:"title",staticClass:"todo-title",attrs:{focus:"",required:"",placeholder:"What are you want to do?"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("div",{staticClass:"d-flex align-items-top"},[n("i",{staticClass:"fas fa-align-left icon"}),n("AppTextarea",{staticClass:"todo-description",attrs:{placeholder:"Describe your task"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)},fo=[],mo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AppButton",{attrs:{mode:"default"},on:{click:function(e){t.isOpen=!0}}},[t._v("\n    "+t._s(t.currentLabel)+"\n    "),n("i",{staticClass:"fas fa-caret-down icon ml-2"})]),n("AppModal",{attrs:{isOpen:t.isOpen,footer:!1},on:{close:function(e){t.isOpen=!1}}},[n("AppListGroup",t._l(t.mappedOptions,function(e){var o=e.value,r=e.label,a=e.isSelected;return n("AppListGroupItem",{key:o,staticClass:"option d-flex justify-content-between",nativeOn:{click:function(e){return t.select(o)}}},[t._v("\n          "+t._s(r)+"\n          "),n("i",{directives:[{name:"show",rawName:"v-show",value:a,expression:"isSelected"}],staticClass:"fas fa-check"})])}),1)],1)],1)},vo=[],ho={name:"AppSelect",components:{AppButton:y,AppModal:G,AppListGroup:dn,AppListGroupItem:jn},props:{value:[Object,String,Number,Array,Boolean],options:{type:Array,default:function(){return[]}},valueKey:String,labelKey:String},data:function(){return{isOpen:!1}},computed:{mappedOptions:function(){var t=this;return this.options.map(function(e){return{value:t.getValue(e),label:t.getLabel(e),isSelected:t.isSelected(e)}})},currentLabel:function(){var t=this,e=this.options.find(function(e){return t.getValue(e)===t.value});return this.getLabel(e)}},methods:{getValue:function(t){return this.valueKey?t[this.valueKey]:this.value},getLabel:function(t){return this.labelKey?t[this.labelKey]:this.value},isSelected:function(t){return this.getValue(t)===this.value},select:function(t){this.isOpen=!1,this.$emit("input",t)}}},bo=ho,jo=(n("56c5"),Object(d["a"])(bo,mo,vo,!1,null,"3c07a272",null)),go=jo.exports,Oo={name:"ToDoDetailsForm",components:{AppTextarea:Yn,AppSelector:go},props:{todo:Object},computed:Object(c["a"])({},Object(X["c"])(["projects"]),Object(Z["b"])(["todos.todoForm.id","todos.todoForm.title","todos.todoForm.description","todos.todoForm.projectId"])),watch:{projectId:"changeUrl"},methods:Object(c["a"])({},Object(X["b"])([Tt]),{changeUrl:function(){this.$router.replace({name:Uo.TODO_DETAILS.name,params:{projectId:this.projectId,todoId:this.id}})}}),beforeDestroy:function(){this[Tt]()},mounted:function(){var t=this;this.$nextTick(function(){return t.$refs.title.$el.focus()})}},_o=Oo,xo=(n("abd2"),Object(d["a"])(_o,po,fo,!1,null,"3d3b8f2e",null)),yo=xo.exports,ko={name:"ToDoDetails",components:{AppPage:te,AppDetailsActions:on,AppBackground:ie,ToDoDetailsForm:yo},props:{projectId:String,todoId:String},created:function(){this.check()},watch:{todoId:"check",projectId:"check"},computed:Object(c["a"])({},Object(X["c"])(["todoForm"])),methods:Object(c["a"])({},Object(X["b"])([yt,Ct]),{check:function(){if(this[Ct](this.todoId),!this.todoForm)return this.$router.replace(Uo.NOT_FOUND.path)},remove:function(){this.$router.back(),this[yt](this.todoId)}})},wo=ko,Ao=Object(d["a"])(wo,uo,lo,!1,null,"4e6081c0",null),$o=Ao.exports,Co=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"display-4"},[t._v("Created by Bezzubov Egor")])},To=[],Eo={},Do=Eo,So=Object(d["a"])(Do,Co,To,!1,null,null,null),Io=So.exports,Fo=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Lo=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-container d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"col-11 col-md-8 col-lg-6 d-flex flex-column justify-content-center align-items-center"},[n("h2",{staticClass:"display-4 text-danger"},[t._v("Requested page was not found")]),n("h1",{staticClass:"display-1"},[t._v("404")])])])}],Po={name:"NotFoundPage"},Ro=Po,Bo=(n("4dff"),Object(d["a"])(Ro,Fo,Lo,!1,null,"9a739c0e",null)),Mo=Bo.exports,No={MAIN:{name:"main",path:"/",redirect:"/projects",props:!0},PROJECTS:{name:"projects",path:"/projects",component:We,props:!0},PROJECT:{name:"project-details",path:"/projects/:projectId/todos",component:io,props:!0},TODO_DETAILS:{name:"todo-details",path:"/project/:projectId/todos/:todoId",component:$o,props:!0},ABOUT:{name:"about",path:"/about",component:Io,props:!0},NOT_FOUND:{name:"not-found",path:"/not-found",component:Mo,props:!0}},Go=[].concat(Object(Kt["a"])(Object.values(No)),[{path:"*",redirect:No.NOT_FOUND.path}]),Uo=No,Jo=new r["a"]({routes:Go}),Ho=Jo,Vo=[{title:"Project list",icon:"fas fa-list",to:Uo.MAIN.path},{title:"About this app",icon:"fas fa-question-circle",to:Uo.ABOUT.path}],Ko=Vo,qo={name:"App",components:{TheLayout:m,TheFooter:Q},store:Vt,router:Ho,data:function(){return{mainMenu:Ko}},created:function(){this[jt](),this[At]()},methods:Object(c["a"])({},Object(X["b"])([jt,At])),computed:Object(X["c"])(["loaded"])},zo=qo,Wo=(n("cfc5"),Object(d["a"])(zo,a,s,!1,null,"731c88f6",null)),Yo=Wo.exports,Qo=n("9483");Object(Qo["a"])("".concat("/vue-task-list/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){confirm("New content is available; do you want to reload app?")&&window.location.reload(),console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].config.productionTip=!1,o["a"].use(r["a"]),new o["a"]({render:function(t){return t(Yo)}}).$mount("#app")},"59b9":function(t,e,n){},"669a":function(t,e,n){},"6eed":function(t,e,n){t.exports=n.p+"img/projects.d043e42e.svg"},"7a5a":function(t,e,n){},"7c1a":function(t,e,n){},"7e43":function(t,e,n){},"7fd6":function(t,e,n){},8410:function(t,e,n){"use strict";var o=n("27b9"),r=n.n(o);r.a},9263:function(t,e,n){"use strict";var o=n("1f5c"),r=n.n(o);r.a},"97b0":function(t,e,n){},a623:function(t,e,n){},abd2:function(t,e,n){"use strict";var o=n("21e9"),r=n.n(o);r.a},ae61:function(t,e,n){"use strict";var o=n("59b9"),r=n.n(o);r.a},b00c:function(t,e,n){},bd66:function(t,e,n){"use strict";var o=n("105a"),r=n.n(o);r.a},cc55:function(t,e,n){"use strict";var o=n("07ba"),r=n.n(o);r.a},cfc5:function(t,e,n){"use strict";var o=n("30b7"),r=n.n(o);r.a},d362:function(t,e,n){},ddeb:function(t,e,n){},e1a3:function(t,e,n){"use strict";var o=n("46f7"),r=n.n(o);r.a},e2b9:function(t,e,n){},e6b6:function(t,e,n){},e926:function(t,e,n){},ea2c:function(t,e,n){},ea8e:function(t,e,n){"use strict";var o=n("7fd6"),r=n.n(o);r.a},ee82:function(t,e,n){"use strict";var o=n("97b0"),r=n.n(o);r.a},ef0e:function(t,e,n){t.exports=n.p+"img/todo.75cfc88e.svg"},f225:function(t,e,n){},fb2a:function(t,e,n){"use strict";var o=n("2057"),r=n.n(o);r.a},fb3e:function(t,e,n){"use strict";var o=n("ddeb"),r=n.n(o);r.a},fc8b:function(t,e,n){"use strict";var o=n("b00c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.a9dc6562.js.map