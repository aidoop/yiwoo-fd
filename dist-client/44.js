(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1222:function(e,t,r){"use strict";r.r(t),r.d(t,"SettingList",(function(){return _}));r(964);var n,i,a,s,o,l=r(597),c=r(9),d=r(38),u=r(81),p=r(31),h=r(140),f=r.n(h),g=r(1),b=r(74);function m(e,t,r,n,i,a,s){try{var o=e[a](s),l=o.value}catch(e){return void r(e)}o.done?t(l):Promise.resolve(l).then(n,i)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){m(a,n,i,s,o,"next",e)}function o(e){m(a,n,i,s,o,"throw",e)}s(void 0)}))}}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}class _ extends(Object(b.a)(d.store)(Object(c.b)(c.a)(d.PageView))){static get styles(){return[u.c,Object(g.b)(n||(n=w(["\n        :host {\n          display: flex;\n          flex-direction: column;\n          overflow: hidden;\n        }\n        search-form {\n          overflow: visible;\n        }\n        data-grist {\n          overflow-y: auto;\n          flex: 1;\n        }\n      "])))]}static get properties(){return{_searchFields:Array,config:Object,data:Object}}render(){return Object(g.e)(i||(i=w(['\n      <search-form id="search-form" .fields='," @submit=","></search-form>\n      \n      <data-grist .mode="," .config=",'\n        .fetchHandler="','"></data-grist>\n    '])),this._searchFields,e=>this.dataGrist.fetch(),Object(p.j)()?"LIST":"GRID",this.config,this.fetchHandler.bind(this))}constructor(){super(),this.refreshHandlers=[]}get context(){return{title:c.a.t("title.setting"),help:"setting/settings",actions:[O({title:c.a.t("button.save"),action:this._saveSettings.bind(this)},u.a.save),O({title:c.a.t("button.delete"),action:this._deleteSettings.bind(this)},u.a.delete)],exportable:{name:c.a.t("title.setting"),data:this._exportableData.bind(this)},importable:{handler:()=>{}}}}pageUpdated(e,t){this.active&&(this.dataGrist.fetch(),this._searchFields=[{name:"name",label:c.a.t("field.name"),type:"text",props:{searchOper:"i_like"}},{name:"description",label:c.a.t("field.description"),type:"text",props:{searchOper:"i_like"}},{name:"category",label:c.a.t("field.category"),type:"text",props:{searchOper:"i_like"}}],this.config={list:{fields:["name","description","value"]},rows:{selectable:{multiple:!0}},columns:[{type:"gutter",gutterName:"dirty"},{type:"gutter",gutterName:"sequence"},{type:"gutter",gutterName:"row-selector",multiple:!0},{type:"string",name:"name",header:c.a.t("field.name"),record:{editable:!0,align:"left"},sortable:!0,width:100},{type:"string",name:"description",header:c.a.t("field.description"),record:{editable:!0,align:"left"},sortable:!0,width:200},{type:"code",name:"category",header:c.a.t("field.category"),record:{editable:!0,codeName:"SETTING_CATEGORIES"},sortable:!0,width:150},{type:"string",name:"value",header:c.a.t("field.value"),record:{editor:function(e,t,r,n,i){return Object(l.c)(r.category)(e,t,r,n,i)},renderer:function(e,t,r,n,i){return Object(l.d)(r.category)(e,t,r,n,i)},editable:!0},sortable:!0,width:180},{type:"datetime",name:"updatedAt",header:c.a.t("field.updated_at"),record:{editable:!1,align:"left"},sortable:!0,width:150},{type:"object",name:"updater",header:c.a.t("field.updater"),record:{editable:!1,align:"left"},sortable:!0,width:150}]})}get searchForm(){return this.renderRoot.querySelector("search-form")}get dataGrist(){return this.renderRoot.querySelector("data-grist")}fetchHandler({page:e,limit:t,sorters:r=[]}){var n=this;return y((function*(){var i=n.searchForm.queryFilters,s={page:e,limit:t},o=r,l=yield d.client.query({query:f()(a||(a=w(["\n        query settings($filters: [Filter], $pagination: Pagination, $sortings: [Sorting]) {\n          settings(filters: $filters, pagination: $pagination, sortings: $sortings) {\n            items {\n              id\n              name\n              description\n              category\n              value\n              updatedAt\n              updater {\n                id\n                name\n                description\n              }\n            }\n            total\n          }\n        }\n      "]))),variables:{filters:i,pagination:s,sortings:o},context:Object(d.gqlContext)()});return{total:l.data.settings.total||0,records:l.data.settings.items||[]}}))()}_saveSettings(){var e=this;return y((function*(){var t=e.dataGrist.dirtyRecords;t&&t.length&&(t=t.map(e=>{var t=e.id?{id:e.id}:{},r=e.__dirtyfields__;for(var n in r)t[n]=r[n].after;return t.cuFlag=e.__dirty__,t}),(yield d.client.mutate({mutation:f()(s||(s=w(["\n          mutation updateMultipleSetting($patches: [SettingPatch]!) {\n            updateMultipleSetting(patches: $patches) {\n              name\n            }\n          }\n        "]))),variables:{patches:t},context:Object(d.gqlContext)()})).errors||(e.dataGrist.fetch(),e.applyRefreshHandlers()))}))()}_deleteSettings(){var e=this;return y((function*(){var t;if(null!==(t=e.dataGrist.selected)&&void 0!==t&&t.length){var r=e.dataGrist.selected.map(e=>e.name);(yield d.client.mutate({mutation:f()(o||(o=w(["\n          mutation deleteSettings($names: [String]!) {\n            deleteSettings(names: $names)\n          }\n        "]))),variables:{names:r},context:Object(d.gqlContext)()})).errors||(e.dataGrist.fetch(),e.applyRefreshHandlers())}else Object(d.CustomAlert)({title:c.a.t("text.nothing_selected"),text:c.a.t("text.there_is_nothing_to_delete")})}))()}applyRefreshHandlers(){this.refreshHandlers.forEach(e=>e())}_exportableData(){return this.dataGrist.exportRecords()}stateChanged(e){var t;this.refreshHandlers=(null===(t=e.setting)||void 0===t?void 0:t.refreshHandlers)||[]}}window.customElements.define("setting-list",_)}}]);