(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{437:function(t,e,n){},517:function(t,e,n){"use strict";var r=n(437);n.n(r).a},684:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-info"},[n("div",{staticClass:"block-info__name"},[t._v("Block «About me»")]),n("ButtonAddgroup",{on:{showAddingForm:function(e){t.showAddFormTest=!0}}})],1),n("div",{staticClass:"blocks"},[t.showAddFormTest?n("Skilladd",{on:{onHideNewSkill:function(e){t.showAddFormTest=!1}}}):t._e(),t._l(t.categories,function(e){return n("Skillplank",{key:e.id,attrs:{category:e,skills:t.filterSkillsByCategoryId(e.id)}})})],2)])])};r._withStripped=!0;var i=n(97);function o(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=Object(i.a)("categories"),l=c.mapActions,u=c.mapState,f=(c.mapGetters,c.mapMutations,Object(i.a)("skills")),d=f.mapActions,p=f.mapState,m=(f.mapGetters,f.mapMutations,{name:"About",data:function(){return{showAddFormTest:!1}},computed:a({},u({categories:function(t){return t.categories}}),p({skills:function(t){return t.skills}})),components:{Skilladd:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,690))},Skillplank:function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,691))},ButtonAddgroup:function(){return n.e(20).then(n.bind(null,692))}},methods:a({},l(["fetchCategories"]),d(["fetchSkills"]),{filterSkillsByCategoryId:function(t){return this.skills.filter(function(e){return e.category===t})}}),created:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetchCategories();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),alert("Произошла ошибка при загрузке категорий");case 8:return t.prev=8,t.next=11,this.fetchSkills();case 11:t.next=16;break;case 13:t.prev=13,t.t1=t.catch(8),alert("Произошла ошибка при загрузке скиллов");case 16:case"end":return t.stop()}},t,this,[[0,5],[8,13]])}),function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}()}),h=(n(517),n(94)),v=Object(h.a)(m,r,[],!1,null,null,null);v.options.__file="src/admin/pages/About.vue";e.default=v.exports}}]);