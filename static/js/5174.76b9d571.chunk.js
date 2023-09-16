/*! For license information please see 5174.76b9d571.chunk.js.LICENSE.txt */
(self.webpackChunkhi_soft=self.webpackChunkhi_soft||[]).push([[5174],{7091:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});r(9867);var n=r(5644),i=r(2834);var a=function(e){var t=e.tag,r=void 0===t?"h4":t;return(0,i.jsxs)("div",{className:"feature-info ".concat(e.className||""),children:[(null===e||void 0===e?void 0:e.image)&&(0,i.jsx)("div",{className:"feature-info-img",children:(0,i.jsx)("img",{className:"img-fluid border-radius-5",src:e.image,alt:e.title})}),(0,i.jsxs)("div",{className:"feature-info-description",children:[(0,i.jsx)(r,{className:"feature-info-title",children:e.title}),(null===e||void 0===e?void 0:e.content)&&(0,i.jsx)("p",{className:"feature-info-content",children:e.content}),(null===e||void 0===e?void 0:e.link)&&(0,i.jsx)(n.rU,{className:"icon-btn",to:"".concat(e.link||"#"),children:(0,i.jsx)("i",{className:"fa-solid fa-arrow-right-long"})})]})]})}},5468:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});r(9867);var n=r(5644),i=r(2834);var a=function(e){var t=e.tag,r=void 0===t?"h5":t;return(0,i.jsxs)("div",{className:"feature-info ".concat(e.theme||""),children:[(0,i.jsxs)("div",{className:"feature-info-icon",children:[(0,i.jsx)("i",{className:e.icon}),"feature-info-style-02"===e.theme&&(0,i.jsx)(r,{className:"feature-info-title",children:e.title})]}),(0,i.jsxs)("div",{className:"feature-info-content",children:["feature-info-style-01"===e.theme&&(0,i.jsx)(r,{className:"feature-info-title",children:e.title}),(0,i.jsx)("p",{children:e.description}),(0,i.jsx)(n.rU,{className:"icon-btn",to:{pathname:"/service-details/".concat(e.id)},children:(0,i.jsx)("i",{className:"fa-solid fa-arrow-right-long"})})]}),"feature-info-style-02"===e.theme&&(0,i.jsx)("div",{className:"feature-info-bg-img",style:{backgroundImage:"url(".concat(e.imgsrc,")")}})]})}},1104:function(e,t,r){"use strict";r.r(t);r(9867);var n=r(3219),i=r(8650),a=r(4865),s=r(5034),c=r(7091),o=(r(5468),r(8750)),l=r(2184),u=r(7127),d=r(2834);t.default=function(e){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"site-content",children:[(0,d.jsx)(s.Z,{title:"Feature Info",breadCrumbItems:[{label:"Home",path:"/"},{label:"Elements",path:"#"},{label:"Feature Info",path:"#",active:!0}]}),(0,d.jsx)("div",{className:"content-wrapper",children:(0,d.jsx)("section",{className:"section-ptb",children:(0,d.jsx)(n.Z,{children:(0,d.jsx)(i.Z,{children:(0,d.jsx)(a.Z,{children:(0,d.jsxs)("div",{className:"feature-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1",children:[(0,d.jsx)(c.Z,{image:o,title:"Mission and vision",content:"Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements and provide the best solutions.",link:"#"}),(0,d.jsx)(c.Z,{image:l,title:"Our challenges",content:"We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we\u2019ve got you covered.",link:"#"}),(0,d.jsx)(c.Z,{image:u,title:"Our team",content:"Meet our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours.",link:"#"})]})})})})})})]})})}},5034:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(9867);var n=r(5644),i=r(3219),a=r(8650),s=r.p+"static/media/page-header-bg.cdc63e069520ad4db2d1.webp",c=r(2834);var o=function(e){return(0,c.jsxs)("div",{className:"page-header ".concat(e.bgImageHide?"bg-hide":""," theme-").concat(e.theme),style:e.bgImageHide?null:{backgroundImage:"url(".concat(e.PagaHeaderBg||s,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"},children:[e.bgImageHide?null:(0,c.jsx)("div",{className:"page-header-overlay",style:e.overlay?{backgroundColor:e.overlay}:null}),(0,c.jsx)("div",{className:"page-header-wrapper",children:(0,c.jsx)(i.Z,{children:(0,c.jsx)(a.Z,{className:"d-flex justify-content-center",children:(0,c.jsx)("div",{className:e.colSize||"col-md-8",children:(0,c.jsxs)("div",{className:"page-header-inner",children:[(0,c.jsx)("h2",{className:"page-header-title",children:e.title}),(null===e||void 0===e?void 0:e.description)&&(0,c.jsx)("p",{children:e.description}),(null===e||void 0===e?void 0:e.breadCrumbItems)&&(0,c.jsx)("ul",{className:"page-breadcrumbs",children:e.breadCrumbItems.map((function(e,t){return e.active?(0,c.jsx)("li",{className:"breadcrumb-item active",children:e.label},t):(0,c.jsx)("li",{className:"breadcrumb-item",children:(0,c.jsx)(n.rU,{to:e.path,children:e.label})},t)}))})]})})})})})]})}},4758:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},4865:function(e,t,r){"use strict";var n=r(9439),i=r(1413),a=r(5987),s=r(4758),c=r.n(s),o=r(9867),l=r(5582),u=r(2834),d=["as","bsPrefix","className"],f=["className"];var p=o.forwardRef((function(e,t){var r=function(e){var t=e.as,r=e.bsPrefix,n=e.className,s=(0,a.Z)(e,d);r=(0,l.vE)(r,"col");var o=(0,l.pi)(),u=(0,l.zG)(),f=[],p=[];return o.forEach((function(e){var t,n,i,a=s[e];delete s[e],"object"===typeof a&&null!=a?(t=a.span,n=a.offset,i=a.order):t=a;var c=e!==u?"-".concat(e):"";t&&f.push(!0===t?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(t)),null!=i&&p.push("order".concat(c,"-").concat(i)),null!=n&&p.push("offset".concat(c,"-").concat(n))})),[(0,i.Z)((0,i.Z)({},s),{},{className:c().apply(void 0,[n].concat(f,p))}),{as:t,bsPrefix:r,spans:f}]}(e),s=(0,n.Z)(r,2),o=s[0],p=o.className,m=(0,a.Z)(o,f),v=s[1],b=v.as,h=void 0===b?"div":b,g=v.bsPrefix,x=v.spans;return(0,u.jsx)(h,(0,i.Z)((0,i.Z)({},m),{},{ref:t,className:c()(p,!x.length&&g)}))}));p.displayName="Col",t.Z=p},3219:function(e,t,r){"use strict";var n=r(1413),i=r(5987),a=r(4758),s=r.n(a),c=r(9867),o=r(5582),l=r(2834),u=["bsPrefix","fluid","as","className"],d=c.forwardRef((function(e,t){var r=e.bsPrefix,a=e.fluid,c=void 0!==a&&a,d=e.as,f=void 0===d?"div":d,p=e.className,m=(0,i.Z)(e,u),v=(0,o.vE)(r,"container"),b="string"===typeof c?"-".concat(c):"-fluid";return(0,l.jsx)(f,(0,n.Z)((0,n.Z)({ref:t},m),{},{className:s()(p,c?"".concat(v).concat(b):v)}))}));d.displayName="Container",t.Z=d},8650:function(e,t,r){"use strict";var n=r(1413),i=r(5987),a=r(4758),s=r.n(a),c=r(9867),o=r(5582),l=r(2834),u=["bsPrefix","className","as"],d=c.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,c=e.as,d=void 0===c?"div":c,f=(0,i.Z)(e,u),p=(0,o.vE)(r,"row"),m=(0,o.pi)(),v=(0,o.zG)(),b="".concat(p,"-cols"),h=[];return m.forEach((function(e){var t,r=f[e];delete f[e],t=null!=r&&"object"===typeof r?r.cols:r;var n=e!==v?"-".concat(e):"";null!=t&&h.push("".concat(b).concat(n,"-").concat(t))})),(0,l.jsx)(d,(0,n.Z)((0,n.Z)({ref:t},f),{},{className:s().apply(void 0,[a,p].concat(h))}))}));d.displayName="Row",t.Z=d},5582:function(e,t,r){"use strict";r.d(t,{SC:function(){return l},pi:function(){return c},vE:function(){return s},zG:function(){return o}});var n=r(9867),i=(r(2834),["xxl","xl","lg","md","sm","xs"]),a=n.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});a.Consumer,a.Provider;function s(e,t){var r=(0,n.useContext)(a).prefixes;return e||r[t]||t}function c(){return(0,n.useContext)(a).breakpoints}function o(){return(0,n.useContext)(a).minBreakpoint}function l(){return"rtl"===(0,n.useContext)(a).dir}},8750:function(e,t,r){"use strict";e.exports=r.p+"static/media/blog-img1.20d55120bf4d01af8bee.webp"},2184:function(e,t,r){"use strict";e.exports=r.p+"static/media/blog-img2.db72afb0ab3ccc2d638b.webp"},7127:function(e,t,r){"use strict";e.exports=r.p+"static/media/blog-img3.6238e3948dcf0b9b0240.webp"},4942:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(9142);function i(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1413:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4942);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},5987:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(3366);function i(e,t){if(null==e)return{};var r,i,a=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=5174.76b9d571.chunk.js.map