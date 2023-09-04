(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Acme&display=swap);"]),i.push([n.id,"/* Reset styles for body and html */\nbody, html {\n    margin: 0;\n    font-family: 'Acme', sans-serif;\n    height: 100%;\n}\n\n/* Grid container styles */\n.container {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 8fr;\n}\n\n/* Header styles */\nheader {\n    grid-column: 1/3;\n    display: flex;\n    background-color: pink;\n    align-items: center;\n    padding-left: 25px;\n}\n\n/* Left button styles */\n.left-btn {\n    display: flex;\n    gap: 10px;\n}\n\n.burger-btn,\n.home-btn {\n    border: transparent;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 28px;\n}\n\n.home-btn img {\n    width: 30px;\n    height: 30px;\n    padding-top: 10px;\n}\n\n/* Right button styles */\n.right-btn {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 18px;\n    margin-right: 80px;\n    cursor: pointer;\n}\n\n.right-btn img {\n    width: 30px;\n    height: 30px;\n}\n\n.title {\n    flex: 1;\n    text-align: center;\n    font-size: 40px;\n}\n\n/* Navigation styles */\nnav {\n    background-color: rgba(255, 192, 203, 0.3);\n    padding: 9%;\n}\n\n/* Navigation icon styles */\n.nav-icon img {\n    width: 45px;\n    height: 45px;\n}\n\n.nav-icon {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 10px;\n    font-size: 18px;\n    cursor: pointer;\n}\n\n/* Hover styles for navigation icons and add-project */\n.nav-icon:hover,\n.add-project:hover {\n    background-color: #f9cad2;\n    color: white;\n    transform: scale(1.05);\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\n/* Hover styles for buttons */\n.burger-btn:hover,\n.home-btn:hover,\n.right-btn:hover {\n    transform: scale(1.05);\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\n/* Section titles styles */\n.home, .projects {\n    font-size: 28px;\n    border-bottom: 2px solid pink;\n}\n\n.projects {\n    padding-top: 7px;\n}\n\n/* Projects container styles */\n.projects-container {\n    padding-top: 5px;\n}\n\n/* Single project container styles */\n.single-proj-container {\n    display: flex;\n    align-items: center;\n    padding: 2px 10px;\n    gap: 10px;\n    font-size: 18px;\n    cursor: pointer;\n}\n\n/* Add project button styles */\n.add-project {\n    display: flex;\n    align-items: center;\n    padding: 10px 25px;\n    gap: 10px;\n    font-size: 18px;\n    cursor: pointer;\n}\n\n.projects-container img {\n    width: 30px;\n    height: 30px;\n}\n\n/* Delete project styles */\n.delete-proj {\n    margin-left: auto;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.add-project img {\n    width: 25px;\n    height: 25px;\n}\n\n/* Content section styles */\n.content {\n    background-color: rgb(247, 246, 246);\n}\n\n.page-title {\n    padding: 1% 10%;\n}\n\n/* Modal and Project Modal styles */\n.modal, .proj-modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n    max-height: 80%;\n    position: absolute;\n    padding: 1.5rem 2rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 24px;\n    background-color: white;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    width: 50%;\n}\n\n.proj-modal-content {\n    position: absolute;\n    padding: 1.5rem 2rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 24px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    background-color: white;\n    width: 27%;\n}\n\n/* Project class styles */\n.project-class {\n    border-top: 1px solid rgb(167, 167, 167);\n    font-size: 18px;\n    padding-top: 10px;\n}\n\n/* Form styles */\n.form-group {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-size: 18px;\n    border-top: 1px solid rgb(167, 167, 167);\n    padding-top: 10px;\n}\n\n.form-row label {\n    display: block;\n    padding: 10px 0px;\n}\n\n.form-row input,\n.form-row select,\ntextarea {\n    width: 90%;\n    font-size: 16px;\n    padding: 5px;\n    border: 1px solid #bbbcbd;\n    border-radius: 3px;\n}\n\ntextarea {\n    max-height: 200px;\n    resize: vertical;\n    min-height: 20px;\n}\n\n/* Title modal styles */\n.title-modal {\n    padding-bottom: 15px;\n}\n\n/* Input focus styles */\ninput:focus,\nselect:focus,\ntextarea:focus {\n    border: 2px solid rgb(116, 116, 215);\n    box-shadow: 0 0 2px #719ECE;\n    outline: none;\n}\n\n/* Input validation warning styles */\n.name-warning {\n    color: rgb(178, 4, 4);\n    display: none;\n    font-size: 14px;\n    padding: 5px;\n}\n\n/* Close button styles */\n.top-modal {\n    display: flex;\n    justify-content: space-between;\n}\n\n.close {\n    color: #000000;\n    font-size: 22px;\n    cursor: pointer;\n}\n\n.close:hover,\n.delete-proj:hover {\n    color: #555;\n}\n\n/* Modal buttons styles */\n.modal-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    padding-top: 25px;\n}\n\n/* Button styles */\n.add-task, .cancel-btn, .add-proj {\n    padding: 8px 15px;\n    font-size: 17px;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n.add-task, .add-proj {\n    color: white;\n    background-color: rgb(177, 21, 47);\n    border: transparent;\n}\n\n.cancel-btn {\n    border: 1px solid black;\n    background-color: #ccc3c338;\n}\n\n.add-task:hover {\n    background-color: rgb(255, 153, 170);\n}\n\n.cancel-btn:hover {\n    background-color: #b9b6b6;\n    color: white;\n    border: transparent;\n}\n\n/* Big container styles */\n.big-container {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n/* Task container styles */\n.container-task {\n    display: flex;\n    align-items: center;\n    border: 1px solid black;\n    border-radius: 3px;\n    margin: 0% 5%;\n    padding: 5px;\n    gap: 5px;\n    word-wrap: break-word;\n}\n\n/* Left container task styles */\n.left-container-task {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    max-width: 80%;\n    word-wrap: break-word;\n}\n\n.title-task {\n    font-size: 18px;\n}\n\n.diamond {\n    font-size: 30px;\n}\n\n.date {\n    font-size: 18px;\n}\n\n/* Delete icon styles */\n.delete-icon {\n    width: 20px;\n    height: 25px;\n    cursor: pointer;\n}\n\n/* Pen icon styles */\n.pen {\n    cursor: pointer;\n}\n\n/* Checkbox styles */\ninput[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n}\n\n/* Important and not important styles */\n.important {\n    cursor: pointer;\n    color: red;\n}\n\n.not-important {\n    cursor: pointer;\n    color: rgb(237, 210, 55);\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o={};(()=>{t.d(o,{Z:()=>E});var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),m=t.n(u),h=t(426),f={};function y(){document.querySelector(".content"),document.querySelector(".page-title").textContent="Today"}f.styleTagTransform=m(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"b2f18b5f3edfdac3fc0f.png",x=t.p+"851babd8eba29a390c4a.png";class b{constructor(n,e,t,o,r){this.title=n,this.description=e,this.date=t,this.priority=o,this.project=r}}function v(n,e){const t=document.createElement("div");return t.className=n,t.innerHTML=e,t}const j=t.p+"e5a553f968262e690dd9.png";class k{constructor(n){this.name=n}}let w=[];class S{constructor(){this.nav=document.querySelector(".side-bar"),this.content=document.querySelector(".content"),this.modal=document.querySelector(".modal"),this.projModal=document.querySelector(".proj-modal"),this.projectInput=document.querySelector("#name"),this.projectError=document.querySelector(".name-warning"),this.attachEventListeners()}toggleNav(){this.nav.style.display="none"===this.nav.style.display||""===this.nav.style.display?"block":"none",this.content.style.gridColumn="none"===this.nav.style.display?"1/3":"2/3"}openModal(){this.modal.style.display="block"}closeModal(){this.modal.style.display="none"}openProjModal(){this.projModal.style.display="block",this.projectError.style.display="none"}closeProjModal(){this.projModal.style.display="none"}updateProjectList(n){w.push(n),this.populateProjectOptions()}populateProjectOptions(){const n=document.querySelector("#project");n.innerHTML="";const e=document.createElement("option");e.value="inbox",e.textContent="Inbox",n.appendChild(e),w.forEach((e=>{const t=document.createElement("option");t.value=e.name,t.text=e.name,n.appendChild(t)}))}deleteProjectOption(n){const e=w.findIndex((e=>e.name===n));-1!==e&&(w.splice(e,1),this.populateProjectOptions())}attachEventListeners(){const n=document.querySelector(".burger-btn"),e=document.querySelector(".new-task"),t=document.querySelector(".close"),o=document.querySelector(".cancel-btn"),r=document.querySelector(".close-proj"),a=document.querySelector(".cancel-proj"),i=document.querySelector(".inbox"),c=document.querySelector(".today"),s=document.querySelector(".next-week"),d=document.querySelector(".notes"),l=document.querySelector(".home-btn"),p=document.querySelector(".add-task"),u=document.querySelector(".add-project"),m=document.querySelector(".add-proj");n.addEventListener("click",(()=>this.toggleNav())),e.addEventListener("click",(()=>this.openModal())),t.addEventListener("click",(()=>this.closeModal())),o.addEventListener("click",(()=>this.closeModal())),r.addEventListener("click",(()=>this.closeProjModal())),a.addEventListener("click",(()=>this.closeProjModal())),this.modal.addEventListener("click",(n=>{n.target===this.modal&&this.closeModal()})),this.projModal.addEventListener("click",(n=>{n.target===this.projModal&&this.closeProjModal()})),i.addEventListener("click",(()=>{document.querySelector(".content").querySelector(".page-title").textContent="Inbox"})),c.addEventListener("click",(()=>y())),s.addEventListener("click",(()=>(document.querySelector(".content"),void(document.querySelector(".page-title").textContent="Next Week")))),d.addEventListener("click",(()=>(document.querySelector(".content"),void(document.querySelector(".page-title").textContent="Notes")))),l.addEventListener("click",(()=>y())),u.addEventListener("click",(()=>this.openProjModal())),p.addEventListener("click",(n=>{n.preventDefault(),function(){const n=function(n){const e=document.createElement("li");e.className="container-task";const t=document.createElement("input");t.type="checkbox";const o=document.createElement("div");o.className="left-container-task";const r=v("title-task",n.title),a=v("description-task",n.description),i=v("date",n.date),c=function(n){const e=document.createElement("span");return e.classList.add("diamond"),"important"===n?e.classList.add("important"):e.classList.add("not-important"),e.textContent="◆",e.addEventListener("click",(function(){"important"===n?(n="not-important",e.classList.remove("important"),e.classList.add("not-important")):(n="important",e.classList.remove("not-important"),e.classList.add("important"))})),e}(n.priority),s=function(n){const e=new Image;e.src=g,e.classList.add("pen");const t=document.createElement("span");return t.classList.add("pen-container"),t.appendChild(e),t}(),d=function(){const n=new Image;n.src=x,n.classList.add("delete-icon");const e=document.createElement("span");return e.classList.add("delete-container"),e.appendChild(n),function(n){n.addEventListener("click",(()=>{const n=document.querySelector(".big-container"),e=document.querySelector(".container-task");n.removeChild(e)}))}(e),e}();return t.addEventListener("change",(function(){r.style.textDecoration=t.checked?"line-through":"none"})),o.appendChild(r),o.appendChild(a),e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(c),e.appendChild(s),e.appendChild(d),e}(function(){const n=document.querySelector("#title").value,e=document.querySelector("#description").value,t=document.querySelector("#date").value,o=document.querySelector("#priority").value,r=document.querySelector("#project").value;return new b(n,e,t,o,r)}());document.querySelector(".big-container").appendChild(n),document.querySelector("#title").value="",document.querySelector("#description").value="",document.querySelector("#date").value="",document.querySelector("#priority").value="not-important",document.querySelector("#project").value="inbox"}(),this.closeModal()})),m.addEventListener("click",(n=>{n.preventDefault(),""===this.projectInput.value.trim()?this.projectError.style.display="block":(function(){const n=document.querySelector(".projects-container"),e=function(){const n=document.querySelector("#name").value;return new k(n)}(),t=function(n){const e=document.createElement("div");e.className="single-proj-container";const t=new Image;t.src=j,t.className="star-icon";const o=document.createElement("div");o.className="name",o.innerHTML=n.name;const r=document.createElement("div");return r.className="delete-proj",r.innerHTML="x",function(n,e){n.addEventListener("click",(()=>{(new E).deleteProjectOption(e);const n=document.querySelector(".projects-container"),t=document.querySelector(".single-proj-container");n.removeChild(t)}))}(r,n.name),e.appendChild(t),e.appendChild(o),e.appendChild(r),e}(e);n.appendChild(t),(new E).updateProjectList(e),document.querySelector("#name").value=""}(),this.closeProjModal())})),i.click()}}document.addEventListener("DOMContentLoaded",(()=>{new S}));const E=S})()})();