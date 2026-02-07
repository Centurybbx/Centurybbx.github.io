import{r as R,a as v}from"./index._OACqPSs.js";var m={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function b(){if(_)return o;_=1;var c=R(),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function f(n,e,p){var r,i={},d=null,x=null;p!==void 0&&(d=""+p),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(x=e.ref);for(r in e)l.call(e,r)&&!y.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:s,type:n,key:d,ref:x,props:i,_owner:u.current}}return o.Fragment=a,o.jsx=f,o.jsxs=f,o}var g;function h(){return g||(g=1,m.exports=b()),m.exports}var t=h();function w({gameId:c,src:s,title:a}){const[l,u]=v.useState(!0);return t.jsxs("div",{className:"game-embed-container",children:[t.jsx("iframe",{src:s,title:a,className:"game-iframe",onLoad:()=>u(!1),allow:"accelerometer; gyroscope; autoplay; fullscreen",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms"}),l&&t.jsx("div",{className:"game-loading",children:t.jsxs("span",{children:["Loading ",a,"..."]})}),t.jsx("style",{jsx:!0,children:`
        .game-embed-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
        }

        .game-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .game-loading {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
          color: #888;
          font-family: var(--font-mono);
        }
      `})]})}export{w as default};
