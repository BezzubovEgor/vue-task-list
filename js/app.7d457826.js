(function(t){function e(e){for(var o,a,c=e[0],i=e[1],u=e[2],p=0,d=[];p<c.length;p++)a=c[p],r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0237":function(t,e,n){},"06cd":function(t,e,n){},"07ba":function(t,e,n){},"0a7f":function(t,e,n){"use strict";var o=n("1301"),r=n.n(o);r.a},"0baf":function(t,e,n){"use strict";var o=n("e926"),r=n.n(o);r.a},1301:function(t,e,n){},"143c":function(t,e,n){"use strict";var o=n("6677"),r=n.n(o);r.a},1969:function(t,e,n){"use strict";var o=n("44a8"),r=n.n(o);r.a},"1b04":function(t,e,n){"use strict";var o=n("669a"),r=n.n(o);r.a},"1ba7":function(t,e,n){},"1c7a":function(t,e,n){"use strict";var o=n("a78d"),r=n.n(o);r.a},2089:function(t,e,n){"use strict";var o=n("f225"),r=n.n(o);r.a},3062:function(t,e,n){"use strict";var o=n("1ba7"),r=n.n(o);r.a},"38e0":function(t,e,n){"use strict";var o=n("a623"),r=n.n(o);r.a},"44a8":function(t,e,n){},"46f7":function(t,e,n){},"4dff":function(t,e,n){"use strict";var o=n("0237"),r=n.n(o);r.a},"4e3e":function(t,e,n){"use strict";var o=n("7a5a"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o,r,s=n("2b0e"),a=n("8c4f"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.storeLoaded?n("TheLayout",{scopedSlots:t._u([{key:"content",fn:function(){return[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)]},proxy:!0},{key:"footer",fn:function(){return[n("TheFooter",{attrs:{menu:t.mainMenu}})]},proxy:!0}],null,!1,3882775244)}):t._e()],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout d-flex flex-column justify-content-between align-items-center"},[t._t("header"),n("div",{staticClass:"container-fluid content flex-grow-1"},[t._t("content")],2),t._t("footer")],2)},l=[],p={name:"TheLayout"},d=p,f=(n("2089"),n("2877")),m=Object(f["a"])(d,u,l,!1,null,"6792d134",null),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-5 col-md-7 col-sm-9 d-flex justify-content-between"},[n("AppButton",{staticClass:"bars-button",attrs:{mode:"default-secondary"},on:{click:function(e){t.isMenuOpen=!0}}},[n("i",{staticClass:"fas fa-bars"})])],1)]),n("AppModal",{attrs:{footer:!1,isOpen:t.isMenuOpen},on:{close:function(e){t.isMenuOpen=!1}}},[n("AppMenu",{attrs:{menu:t.menu},on:{select:function(e){t.isMenuOpen=!1}}})],1)],1)},h=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._b({class:t.classByMode,on:{click:function(e){return t.$emit("click",e)}}},"button",t.$props,!1),[t._t("default")],2)},_=[],g={default:"default","default-secondary":"default secondary",primary:"btn btn-primary d-flex align-items-center primary"},O={name:"AppButton",props:{type:{default:"button",type:String},mode:{default:"default",type:String}},computed:{classByMode:function(){return g[this.mode]}}},y=O,x=(n("cc55"),Object(f["a"])(y,j,_,!1,null,"4f5aedd5",null)),w=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FadeInOut",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"app-modal-overflow",on:{click:function(e){return t.$emit("close")}}})]),n("FadeUp",[t.isOpen?n("div",{staticClass:"app-modal-wrapper container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"app-modal",class:t.modalClass},[t._t("default"),t.footer?n("div",{staticClass:"app-modal-footer d-flex justify-content-end"},[n("a",{on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[t._v("Close")])]):t._e()],2)])]):t._e()])],1)},k=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t._t("default")],2)},$=[],P={name:"FadeInOut"},E=P,T=(n("1b04"),Object(f["a"])(E,A,$,!1,null,"117ad39b",null)),F=T.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-up"}},[t._t("default")],2)},B=[],N={name:"FadeUp"},S=N,L=(n("0a7f"),Object(f["a"])(S,D,B,!1,null,"eaececf0",null)),M=L.exports,I={name:"AppModal",components:{FadeInOut:F,FadeUp:M},props:{isOpen:Boolean,footer:{default:!0,type:Boolean},modalClass:{default:"col-12 col-sm-9 col-md-7 col-lg-5",type:String}},created:function(){document.addEventListener("backbutton",this.closeEventHandler)},destroyed:function(){document.removeEventListener("backbutton",this.closeEventHandler)},methods:{closeEventHandler:function(){this.$emit("close")}}},R=I,U=(n("fb3e"),Object(f["a"])(R,C,k,!1,null,"40dc611a",null)),q=U.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-group text-left"},t._l(t.menu,function(e,o){return n("router-link",{key:e.key||o,staticClass:"list-group-item list-group-item-action",attrs:{to:e.to},nativeOn:{click:function(n){return t.$emit("select",e.key)}}},[n("i",{class:e.icon}),t._v(" "+t._s(e.title))])}),1)},G=[],H={name:"AppMenu",props:{menu:Array}},z=H,W=(n("38e0"),Object(f["a"])(z,J,G,!1,null,"32770e04",null)),Y=W.exports,K={name:"TheFooter",components:{AppButton:w,AppModal:q,AppMenu:Y},props:{menu:Array},data:function(){return{isMenuOpen:!1}}},Q=K,V=(n("3062"),Object(f["a"])(Q,b,h,!1,null,"5de703f2",null)),X=V.exports,Z=n("2f62"),tt=n("bd86"),et=(n("7514"),n("6b54"),n("cebc")),nt="addToDo",ot="toggleToDo",rt="setProjects",st="selectProject",at="removeProject",ct="addProject",it="storeLoaded",ut=(o={},Object(tt["a"])(o,it,function(t){t.storeLoaded=!0}),Object(tt["a"])(o,nt,function(t,e){var n=Object(et["a"])({},e,{done:!1,id:(new Date).getTime().toString()});t.projects.find(function(e){var n=e.id;return n===t.selectedProject}).todos.unshift(n)}),Object(tt["a"])(o,ot,function(t,e){var n=t.projects.find(function(e){var n=e.id;return n===t.selectedProject}).todos.find(function(t){var n=t.id;return n===e});n.done=!n.done}),Object(tt["a"])(o,rt,function(t,e){t.projects=e}),Object(tt["a"])(o,st,function(t,e){t.selectedProject=e}),Object(tt["a"])(o,at,function(t,e){t.projects=t.projects.filter(function(t){return t!==e})}),Object(tt["a"])(o,ct,function(t,e){t.projects.unshift(Object(et["a"])({},e,{todos:[],id:(new Date).getTime().toString()}))}),o),lt=(n("96cf"),n("3b8d")),pt=n("3f4f"),dt=1,ft="vue-task-list";function mt(){return vt.apply(this,arguments)}function vt(){return vt=Object(lt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("indexedDB"in window){t.next=2;break}throw new Error("YOur brouser does not supports indexedDB");case 2:return t.abrupt("return",Object(pt["a"])(ft,dt,{upgrade:function(t){t.objectStoreNames.contains("projects")||t.createObjectStore("projects")}}));case 3:case"end":return t.stop()}},t)})),vt.apply(this,arguments)}function bt(t){return ht.apply(this,arguments)}function ht(){return ht=Object(lt["a"])(regeneratorRuntime.mark(function t(e){var n,o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:return n=t.sent,o=n.transaction(e,"readonly"),r=o.objectStore(e),t.next=7,r.get(e);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}},t)})),ht.apply(this,arguments)}function jt(t,e){return _t.apply(this,arguments)}function _t(){return _t=Object(lt["a"])(regeneratorRuntime.mark(function t(e,n){var o,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:return o=t.sent,r=o.transaction(e,"readwrite"),s=r.objectStore(e),s.put(n,e),t.next=8,r.oncomplete;case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},t)})),_t.apply(this,arguments)}var gt=(r={},Object(tt["a"])(r,nt,function(t,e){t.commit(nt,e),t.dispatch("saveProjects")}),Object(tt["a"])(r,ot,function(t,e){t.commit(ot,e),t.dispatch("saveProjects")}),Object(tt["a"])(r,at,function(t,e){t.commit(at,e),t.dispatch("saveProjects")}),Object(tt["a"])(r,ct,function(t,e){t.commit(ct,e),t.dispatch("saveProjects")}),Object(tt["a"])(r,"loadProjects",function(){var t=Object(lt["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,bt("projects");case 2:n=t.sent,e.commit(rt,n||[]),e.commit(it);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()),Object(tt["a"])(r,"saveProjects",function(){var t=Object(lt["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt("projects",e.state.projects);case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()),r),Ot={project:function(t){return t.projects.find(function(e){var n=e.id;return n===t.selectedProject})},projects:function(t){return t.projects.map(function(t){return Object(et["a"])({},t,{todo:t.todos.filter(function(t){var e=t.done;return!e}).length,done:t.todos.filter(function(t){var e=t.done;return e}).length})})}};s["a"].use(Z["a"]);var yt=new Z["a"].Store({state:{projects:[],selectedProject:null,storeLoaded:!1},mutations:ut,actions:gt,getters:Ot}),xt=yt,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPage",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Projects")]},proxy:!0},{key:"footer",fn:function(){return[n("ProjectFooter")]},proxy:!0}])},[n("ProjectList")],1)},Ct=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page row d-flex flex-column justify-content-between align-items-center flex-nowrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.actions,expression:"$slots.actions"}],staticClass:"actions"},[n("div",{staticClass:"row m-0 justify-content-center"},[n("div",{staticClass:"p-2 col-sm-10 col-md-7 col-lg-5"},[t._t("actions")],2)])]),n("div",{staticClass:"content pb-4 flex-grow-1 col-sm-10 col-md-7 col-lg-5 text-left"},[n("h1",{staticClass:"mt-3 ml-3"},[t._t("header")],2),n("div",{staticClass:"body"},[t._t("default")],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.footer,expression:"$slots.footer"}],staticClass:"footer"},[t._t("footer")],2)])},At=[],$t={name:"AppPage"},Pt=$t,Et=(n("0baf"),Object(f["a"])(Pt,kt,At,!1,null,"b8b23f0e",null)),Tt=Et.exports,Ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppBackground",{attrs:{src:n("6eed")}},[o("transition-group",{staticClass:"row",attrs:{name:"fade",appear:""}},t._l(t.projects,function(e){return o("ProjectListItem",t._b({key:e.id,staticClass:"col-6 p-0",on:{select:function(n){return t.select(e.id)}}},"ProjectListItem",e,!1))}),1)],1)},Dt=[],Bt=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FadeInOut",{attrs:{appear:""}},[t.show?n("div",{staticClass:"image-container d-flex justify-content-center align-items-center"},[n("div",{staticClass:"col-sm-11 col-md-6 col-lg-4"},[n("img",{staticClass:"image",attrs:{src:t.src}})])]):t._e()]),t._t("default")],2)}),Nt=[],St={components:{FadeInOut:F},props:{show:{type:Boolean,default:!0},src:[Object,String]}},Lt=St,Mt=(n("fc8b"),Object(f["a"])(Lt,Bt,Nt,!1,null,"519aa9e5",null)),It=Mt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AppCard",{staticClass:"m-1",attrs:{interactive:""},on:{select:function(e){return t.$emit("select")}},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(t._s(t.name))]},proxy:!0}])},[n("div",[t._v("\n      To Do:\n      "),n("span",{staticClass:"badge"},[t._v(t._s(t.todo))])]),n("div",[t._v("\n      Done:\n      "),n("span",{staticClass:"badge"},[t._v(t._s(t.done))])])])],1)},Ut=[],qt=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:{interactive:t.interactive},attrs:{tabindex:t.interactive&&0},on:{click:t.onClick,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}}},[n("div",{staticClass:"card-body"},[t.$slots.header?n("h5",{staticClass:"card-title"},[t._t("header")],2):t._e(),t._t("default")],2)])}),Jt=[],Gt={props:{interactive:Boolean},methods:{onClick:function(){this.$emit("click"),this.$emit("select")},onEnter:function(){this.$emit("select")}}},Ht=Gt,zt=(n("dade"),Object(f["a"])(Ht,qt,Jt,!1,null,"984b4c82",null)),Wt=zt.exports,Yt={components:{AppCard:Wt},props:{name:String,todo:Number,done:Number}},Kt=Yt,Qt=Object(f["a"])(Kt,Rt,Ut,!1,null,null,null),Vt=Qt.exports,Xt={components:{AppBackground:It,ProjectListItem:Vt},methods:{select:function(t){this.$router.push({name:$n.PROJECT.name,params:{projectId:t}})}},computed:Object(et["a"])({},Object(Z["c"])(["projects"]))},Zt=Xt,te=(n("be45"),Object(f["a"])(Zt,Ft,Dt,!1,null,"907b787a",null)),ee=te.exports,ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-footer d-flex justify-content-center"},[n("div",{staticClass:"add-button d-flex justify-content-center"},[n("AppButton",{attrs:{mode:"primary"},on:{click:function(e){t.isFormOpen=!0}}},[n("span",{staticClass:"plus pr-3"},[t._v("+")]),t._v(" New project\n    ")])],1),n("AppModal",{attrs:{isOpen:t.isFormOpen,footer:!1},on:{close:function(e){t.isFormOpen=!1}}},[n("ProjectForm",{on:{add:t.add}})],1)],1)},oe=[],re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"project-form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"form-group mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control project-form-input",attrs:{placeholder:"What project are you want to create?",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"form-controls d-flex justify-content-end mt-2"},[n("AppButton",{attrs:{type:"submit"}},[t._v("Save")])],1)])},se=[],ae={inserted:function(t){t.focus()}},ce={components:{AppButton:w},props:{project:Object},data:function(){return{name:""}},directives:{focus:ae},methods:{submit:function(){this.name&&(this.$emit("add",{name:this.name}),this.name="")}}},ie=ce,ue=(n("4e3e"),Object(f["a"])(ie,re,se,!1,null,"b43ba59e",null)),le=ue.exports,pe={components:{AppButton:w,AppModal:q,ProjectForm:le},data:function(){return{isFormOpen:!1}},methods:Object(et["a"])({},Object(Z["b"])([ct]),{add:function(t){this.$data.isFormOpen=!1,this[ct](t)}})},de=pe,fe=(n("6598"),Object(f["a"])(de,ne,oe,!1,null,"865b1a60",null)),me=fe.exports,ve={components:{AppPage:Tt,ProjectList:ee,ProjectFooter:me}},be=ve,he=Object(f["a"])(be,wt,Ct,!1,null,null,null),je=he.exports,_e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.project?n("AppPage",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between actions px-2 pt-3 pb-1"},[n("AppButton",{attrs:{mode:"default-secondary"},on:{click:t.back}},[n("i",{staticClass:"fas fa-chevron-left"})]),n("AppButton",{attrs:{mode:"default-secondary"},on:{click:t.removeSelectedProject}},[n("i",{staticClass:"far fa-trash-alt"})])],1)]},proxy:!0},{key:"header",fn:function(){return[t._v(t._s(t.project.name))]},proxy:!0},{key:"footer",fn:function(){return[n("ToDoFooter")]},proxy:!0}],null,!1,2093574160)},[n("ToDoList",{staticClass:"mt-3 todo-list",attrs:{todos:t.project.todos},on:{toggle:t.toggleToDo}})],1):t._e()},ge=[],Oe=(n("a481"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppBackground",{attrs:{src:n("ef0e")}},[t.todos.length?o("AppListGroup",[o("transition-group",{attrs:{name:"fade",appear:""}},t._l(t.todos,function(e){return o("AppListGroupItem",{key:e.id},[o("ToDoItem",t._b({on:{toggle:function(n){return t.$emit("toggle",e.id)}}},"ToDoItem",e,!1))],1)}),1)],1):t._e()],1)}),ye=[],xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-group"},[t._t("default")],2)},we=[],Ce={name:"AppListGroup"},ke=Ce,Ae=Object(f["a"])(ke,xe,we,!1,null,"73d8afdd",null),$e=Ae.exports,Pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-group-item p-3",class:t.className},[t._t("default")],2)},Ee=[],Te={name:"AppListGroupItem",props:{className:{default:"text-left",type:String}}},Fe=Te,De=(n("e1a3"),Object(f["a"])(Fe,Pe,Ee,!1,null,"ffcd43a6",null)),Be=De.exports,Ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item d-flex",class:t.todoClass,on:{click:function(e){return t.$emit("toggle")}}},[n("AppCheckbox",{attrs:{value:t.done}}),n("div",{staticClass:"text-wrapper"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.description,expression:"description"}],staticClass:"desc mt-1"},t._l(t.descriptionLines,function(e,o){return n("div",{key:o,staticClass:"desc-line"},[t._v(t._s(e))])}),0)])],1)},Se=[],Le=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"checkbox",class:{checked:this.value}},[n("i",{staticClass:"fas fa-check"})])])}),Me=[],Ie={name:"AppCheckbox",props:{value:Boolean}},Re=Ie,Ue=(n("c115"),Object(f["a"])(Re,Le,Me,!1,null,"3377ec82",null)),qe=Ue.exports,Je={name:"ToDoItem",components:{AppCheckbox:qe},props:{title:{type:String,required:!0},description:String,done:Boolean},computed:{todoClass:function(){return{done:this.done}},descriptionLines:function(){if(this.description)return this.description.split("\n").slice(0,2)}}},Ge=Je,He=(n("143c"),Object(f["a"])(Ge,Ne,Se,!1,null,"45dcb125",null)),ze=He.exports,We={name:"ToDoList",components:{AppListGroup:$e,AppListGroupItem:Be,AppBackground:It,ToDoItem:ze},props:{todos:{type:Array,required:!0}},mixins:[]},Ye=We,Ke=(n("1c7a"),Object(f["a"])(Ye,Oe,ye,!1,null,"5eca3665",null)),Qe=Ke.exports,Ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-footer d-flex justify-content-center"},[n("div",{staticClass:"add-button d-flex justify-content-center"},[n("AppButton",{attrs:{mode:"primary"},on:{click:function(e){t.isFormOpen=!0}}},[n("span",{staticClass:"plus pr-3"},[t._v("+")]),t._v(" New task\n    ")])],1),n("AppModal",{attrs:{isOpen:t.isFormOpen,footer:!1},on:{close:function(e){t.isFormOpen=!1}}},[n("ToDoForm",{on:{add:t.add}})],1)],1)},Xe=[],Ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"todo-form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"form-group mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control todo-form-input",attrs:{placeholder:"What are you want to do?",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("FadeUp",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDescription,expression:"showDescription"}],staticClass:"form-group description"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],ref:"description",staticClass:"form-control todo-form-input",attrs:{placeholder:"Describe your task"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),n("div",{staticClass:"form-controls d-flex justify-content-between mt-2"},[n("AppButton",{on:{click:t.openDescription}},[n("i",{staticClass:"fas fa-align-left"})]),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")])],1)],1)},tn=[],en={name:"ToDoForm",components:{FadeUp:M,AppButton:w},props:{todo:Object},data:function(){return{title:"",description:"",showDescription:!1}},directives:{focus:ae},methods:{submit:function(){this.title&&(this.$emit("add",{title:this.title,description:this.description}),this.title="")},openDescription:function(){var t=this;this.showDescription=!0,this.$nextTick(function(){return t.$refs.description.focus()})}}},nn=en,on=(n("1969"),Object(f["a"])(nn,Ze,tn,!1,null,"07057987",null)),rn=on.exports,sn={components:{ToDoForm:rn,AppButton:w,AppModal:q},data:function(){return{isFormOpen:!1}},methods:Object(et["a"])({},Object(Z["b"])([nt]),{add:function(t){this.$data.isFormOpen=!1,this.addToDo(t)}})},an=sn,cn=(n("c289"),Object(f["a"])(an,Ve,Xe,!1,null,"7dd40f0b",null)),un=cn.exports,ln={name:"ToDoPage",components:{AppPage:Tt,AppButton:w,ToDoList:Qe,ToDoFooter:un},props:{projectId:String},created:function(){this.selectProject()},watch:{projectId:"selectProject"},computed:Object(et["a"])({},Object(Z["c"])(["project"])),methods:Object(et["a"])({},Object(Z["b"])([ot,at]),{selectProject:function(){this.$store.commit(st,this.projectId),this.project||this.$router.replace($n.NOT_FOUND.path)},back:function(){this.$router.back()},removeSelectedProject:function(){this.back(),this[at](this.project)}})},pn=ln,dn=(n("d69e"),Object(f["a"])(pn,_e,ge,!1,null,"1001cfae",null)),fn=dn.exports,mn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"display-4"},[t._v("Created by Bezzubov Egor")])},vn=[],bn={},hn=bn,jn=Object(f["a"])(hn,mn,vn,!1,null,null,null),_n=jn.exports,gn=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},On=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-container d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"col-11 col-md-8 col-lg-6 d-flex flex-column justify-content-center align-items-center"},[n("h2",{staticClass:"display-4 text-danger"},[t._v("Requested page was not found")]),n("h1",{staticClass:"display-1"},[t._v("404")])])])}],yn={name:"NotFoundPage"},xn=yn,wn=(n("4dff"),Object(f["a"])(xn,gn,On,!1,null,"9a739c0e",null)),Cn=wn.exports,kn={MAIN:{name:"main",path:"/",redirect:"/projects",props:!0},PROJECTS:{name:"projects",path:"/projects",component:je,props:!0},PROJECT:{name:"project",path:"/projects/:projectId",component:fn,props:!0},ABOUT:{name:"about",path:"/about",component:_n,props:!0},NOT_FOUND:{name:"not-found",path:"/not-found",component:Cn,props:!0}},An=[kn.MAIN,kn.PROJECTS,kn.PROJECT,kn.ABOUT,kn.NOT_FOUND,{path:"*",redirect:kn.NOT_FOUND.path}],$n=kn,Pn=new a["a"]({routes:An}),En=Pn,Tn=[{title:"Project list",icon:"fas fa-list",to:$n.MAIN.path},{title:"About this app",icon:"fas fa-question-circle",to:$n.ABOUT.path}],Fn=Tn,Dn={name:"App",components:{TheLayout:v,TheFooter:X},store:xt,router:En,data:function(){return{mainMenu:Fn}},created:function(){this.$store.dispatch("loadProjects")},computed:Object(Z["d"])(["storeLoaded"])},Bn=Dn,Nn=(n("80c9"),Object(f["a"])(Bn,c,i,!1,null,"391dfabd",null)),Sn=Nn.exports,Ln=n("9483");Object(Ln["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,s["a"].use(a["a"]),new s["a"]({render:function(t){return t(Sn)}}).$mount("#app")},6598:function(t,e,n){"use strict";var o=n("06cd"),r=n.n(o);r.a},6677:function(t,e,n){},"669a":function(t,e,n){},"68d9":function(t,e,n){},"6eed":function(t,e,n){t.exports=n.p+"img/projects.d043e42e.svg"},"7a5a":function(t,e,n){},"80c9":function(t,e,n){"use strict";var o=n("aa10"),r=n.n(o);r.a},a623:function(t,e,n){},a78d:function(t,e,n){},aa10:function(t,e,n){},aa75:function(t,e,n){},b00c:function(t,e,n){},be45:function(t,e,n){"use strict";var o=n("68d9"),r=n.n(o);r.a},c115:function(t,e,n){"use strict";var o=n("ed38"),r=n.n(o);r.a},c289:function(t,e,n){"use strict";var o=n("f478"),r=n.n(o);r.a},cc55:function(t,e,n){"use strict";var o=n("07ba"),r=n.n(o);r.a},d69e:function(t,e,n){"use strict";var o=n("aa75"),r=n.n(o);r.a},dade:function(t,e,n){"use strict";var o=n("e7c8"),r=n.n(o);r.a},ddeb:function(t,e,n){},e1a3:function(t,e,n){"use strict";var o=n("46f7"),r=n.n(o);r.a},e7c8:function(t,e,n){},e926:function(t,e,n){},ed38:function(t,e,n){},ef0e:function(t,e,n){t.exports=n.p+"img/todo.75cfc88e.svg"},f225:function(t,e,n){},f478:function(t,e,n){},fb3e:function(t,e,n){"use strict";var o=n("ddeb"),r=n.n(o);r.a},fc8b:function(t,e,n){"use strict";var o=n("b00c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.7d457826.js.map