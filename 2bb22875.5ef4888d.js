(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return t?a.a.createElement(f,i(i({ref:n},u),{},{components:t})):a.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},101:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},102:function(e,n,t){"use strict";var r=t(0),a=t(103);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},103:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},104:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(102),c=t(101),i=t(55),l=t.n(i),u=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(o.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,g=Object(r.useState)(i),y=g[0],O=g[1],j=r.Children.toArray(e.children);if(null!=p){var h=m[p];null!=h&&h!==y&&b.some((function(e){return e.value===h}))&&O(h)}var k=function(e){O(e),null!=p&&v(p,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return k(n)},onClick:function(){k(n)}},t)}))),n?Object(r.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},105:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(100)),c=t(104),i=t(105),l={title:"Webpack driver",sidebar_label:"Webpack"},u={unversionedId:"drivers/webpack",id:"drivers/webpack",isDocsHomePage:!1,title:"Webpack driver",description:"Provides Webpack support by dynamically generating a",source:"@site/docs/drivers/webpack.mdx",slug:"/drivers/webpack",permalink:"/docs/drivers/webpack",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/drivers/webpack.mdx",version:"current",sidebar_label:"Webpack",sidebar:"docs",previous:{title:"TypeScript driver",permalink:"/docs/drivers/typescript"},next:{title:"Tool instance",permalink:"/docs/tool"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Integration",id:"integration",children:[]}],b={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides ",Object(o.b)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack")," support by dynamically generating a\n",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," config file."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Webpack ^4.0.0 || ^5.0.0")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"In your configuration module, install the driver, Webpack, and any loaders or plugins."),Object(o.b)(c.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @beemo/driver-webpack webpack webpack-cli\n"))),Object(o.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install @beemo/driver-webpack webpack webpack-cli\n")))),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"configs/webpack.ts")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"js"),") in which to house your Webpack configuration."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="configs/webpack.ts"',title:'"configs/webpack.ts"'},"import { WebpackConfig } from '@beemo/driver-webpack';\nimport path from 'path';\n\nconst config: WebpackConfig = {{\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js',\n  },\n}\n  // ...\n};\n\nexport default config;\n")),Object(o.b)("h2",{id:"integration"},"Integration"),Object(o.b)("p",null,"In your consuming project, enable the driver by adding ",Object(o.b)("inlineCode",{parentName:"p"},"webpack")," to your ",Object(o.b)("inlineCode",{parentName:"p"},"drivers")," config."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo.ts"',title:'".config/beemo.ts"'},"import { BeemoConfig } from '@beemo/core';\n\nconst config: BeemoConfig = {\n  module: '<config-module>',\n  drivers: ['webpack'],\n};\n\nexport default config;\n")))}p.isMDXComponent=!0}}]);