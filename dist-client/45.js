(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1221:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingPage",(function(){return b}));var s,i,r,a=n(1),c=n(74),o=n(38),g=n(9);function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}class b extends(Object(c.a)(o.store)(Object(g.b)(g.a)(o.PageView))){static get styles(){return[Object(a.b)(s||(s=u(["\n        :host {\n          overflow-y: auto;\n          background-color: var(--setting-background);\n        }\n        div {\n          margin: var(--setting-icon-margin);\n          height: var(--setting-icon-height);\n          background: url(/assets/images/icon-setting.png) center top no-repeat;\n          background-size: contain;\n        }\n      "])))]}static get properties(){return{_settings:Array}}render(){var e=this._settings.sort((e,t)=>e.seq-t.seq);return Object(a.e)(i||(i=u(['\n      <div class="page-icon"></div>\n      ',"\n    "])),e.map(e=>Object(a.e)(r||(r=u([" "," "])),e.template)))}stateChanged(e){this._settings=e.setting.settings}get context(){return{title:g.a.t("title.setting")}}}window.customElements.define("setting-page",b)}}]);