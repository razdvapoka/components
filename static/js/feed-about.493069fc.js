(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/feed/about.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./node_modules/docz/dist/index.m.js"),i=t("./node_modules/emotion-theming/dist/index.esm.js"),c=t("./src/current-media-provider/index.js"),l=t("./src/box/index.js"),s=t("./node_modules/recompose/dist/Recompose.esm.js"),p=t("./src/grid/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var m,i=e[Symbol.iterator]();!(r=(m=i.next()).done)&&(t.push(m.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?h(e):n}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,o=new Array(a),m=0;m<a;m++)o[m]=arguments[m];return y(r,(t=r=y(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),Object.defineProperty(h(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{isMounted:!1,size:null,mediaKey:""}}),t))}var t,o,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,r["Component"]),t=n,m=[{key:"getDerivedStateFromProps",value:function(e,n){var t=d(e.currentMediaKey,1)[0],r=void 0===t?"":t;if(r===n.mediaKey)return null;var a=e["col"+r]||e.col,o=e.theme.grid/a;return o===n.size?null:{size:o,mediaKey:r}}}],(o=[{key:"componentDidMount",value:function(){this.setState({isMounted:!0})}},{key:"render",value:function(){var e=this.props,n=e.children,t=g(e,["children"]),r=this.state,o=r.isMounted,m=r.size,i=a.a.Children.toArray(n),c=o&&1!==m?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=Array.from({length:n}).fill(!0).map(function(){return[]});return e.reduce(function(e,t,r){return e[r%n].push(t),e},t)}(i,m):i;return a.a.createElement(p.a,t,c.map(function(e,n){return a.a.createElement(p.c,Object.assign({key:"feed-item-".concat(n)},t),e)}))}}])&&f(t.prototype,o),m&&f(t,m),n}();Object.defineProperty(E,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{theme:{grid:12},spaceContent:!0,currentMediaKey:[]}});var v=Object(s.a)(Object(s.b)("Item",p.b),c.c,i.b)(E);function x(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components,t=x(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"feed"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#feed"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Feed"),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"description"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#description"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Description"),a.a.createElement(o.MDXTag,{name:"p",components:n},"Masonry-like grid component, created with ",a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#/grid"}},"Grid"),"."),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"usage"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#usage"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Usage"),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { Feed } from 'pss-components'\n")),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<ThemeProvider theme={{ grid: 12 }}>\n  <CurrentMediaProvider>\n    <Feed space={2} col={3} colT={6} colM={12}>\n      <Feed.Item>\n        Item\n      </Feed.Item>\n    </Feed>\n  </CurrentMediaProvider>\n</ThemeProvider>\n")),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"examples"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#examples"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Examples"),a.a.createElement(m.d,{__position:0,__code:'<CurrentMediaProvider>\n  <Feed space={2} col={3} colT={6} colM={12}>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={200}>\n        1\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={150}>\n        2\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={300}>\n        3\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={500}>\n        4\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={200}>\n        5\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={300}>\n        6\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={200}>\n        7\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={150}>\n        8\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={300}>\n        9\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={500}>\n        10\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={200}>\n        11\n      </Box>\n    </Feed.Item>\n    <Feed.Item>\n      <Box bg="gray.0" minHt={300}>\n        12\n      </Box>\n    </Feed.Item>\n  </Feed>\n</CurrentMediaProvider>',__scope:{props:t,ThemeProvider:i.a,CurrentMediaProvider:c.b,Box:l.a,Feed:v}},a.a.createElement(c.b,null,a.a.createElement(v,{space:2,col:3,colT:6,colM:12},a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:200},"1")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:150},"2")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:300},"3")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:500},"4")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:200},"5")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:300},"6")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:200},"7")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:150},"8")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:300},"9")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:500},"10")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:200},"11")),a.a.createElement(v.Item,null,a.a.createElement(l.a,{bg:"gray.0",minHt:300},"12"))))))}}}]);