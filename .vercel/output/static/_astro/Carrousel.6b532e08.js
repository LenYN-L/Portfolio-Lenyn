import{r as l}from"./index.45a47ed6.js";/* empty css                       */const d="/_astro/img1.c0d6c996.jpg",f="/_astro/img2.4e9b7719.jpg";var n={},p={get exports(){return n},set exports(t){n=t}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=l,x=Symbol.for("react.element"),y=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,j=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,i){var r,s={},o=null,m=null;i!==void 0&&(o=""+i),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(m=e.ref);for(r in e)v.call(e,r)&&!h.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:x,type:t,key:o,ref:m,props:s,_owner:j.current}}c.Fragment=y;c.jsx=u;c.jsxs=u;(function(t){t.exports=c})(p);const a=[d,f],g=2500,E=()=>{const[t,e]=l.useState(0),i=l.useRef(null);function r(){i.current&&clearTimeout(i.current)}return l.useEffect(()=>(r(),i.current=setTimeout(()=>e(s=>s===a.length-1?0:s+1),g),()=>{r()}),[t]),n.jsxs("div",{className:"slideshow",children:[n.jsx("div",{className:"slideshowSlider",style:{transform:`translate3d(${-t*100}%, 0, 0)`},children:a.map((s,o)=>n.jsx("div",{className:"slide",style:{backgroundColor:s},children:n.jsx("img",{className:"mix-blend-multiply grayscale w-96",src:s,alt:""})},o))}),n.jsx("div",{className:"slideshowDots",children:a.map((s,o)=>n.jsx("div",{className:`slideshowDot${t===o?" active":""}`,onClick:()=>{e(o)}},o))})]})};export{E as default};
