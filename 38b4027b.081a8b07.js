(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},101:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},102:function(e,t,n){"use strict";var r=n(0),a=n(103);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},103:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},104:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(102),o=n(101),c=n(55),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(r.useState)(c),j=O[0],v=O[1],y=r.Children.toArray(e.children);if(null!=p){var h=f[p];null!=h&&h!==j&&u.some((function(e){return e.value===h}))&&v(h)}var N=function(e){v(e),null!=p&&g(p,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},105:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(100)),o=n(104),c=n(105),l={title:"Prettier driver",sidebar_label:"Prettier"},s={unversionedId:"drivers/prettier",id:"drivers/prettier",isDocsHomePage:!1,title:"Prettier driver",description:"Provides Prettier support by dynamically generating a",source:"@site/docs/drivers/prettier.mdx",slug:"/drivers/prettier",permalink:"/docs/drivers/prettier",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/drivers/prettier.mdx",version:"current",sidebar_label:"Prettier",sidebar:"docs",previous:{title:"Mocha driver",permalink:"/docs/drivers/mocha"},next:{title:"Rollup driver",permalink:"/docs/drivers/rollup"}},b=[{value:"Requirements",id:"requirements",children:[]},{value:"Events",id:"events",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Integration",id:"integration",children:[]},{value:"Ignoring paths",id:"ignoring-paths",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provides ",Object(i.b)("a",{parentName:"p",href:"https://github.com/prettier/prettier"},"Prettier")," support by dynamically generating a\n",Object(i.b)("inlineCode",{parentName:"p"},"prettier.config.js")," config file."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Prettier ^2.0.0")),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("p",null,"Can be listened to on the ",Object(i.b)("inlineCode",{parentName:"p"},"PrettierDriver")," instance."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Event"),Object(i.b)("th",{parentName:"tr",align:null},"Arguments"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"onCreateIgnoreFile")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path, config: { ignore: string[] }")),Object(i.b)("td",{parentName:"tr",align:null},"Called before the ignore file is written.")))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"In your configuration module, install the driver and Prettier."),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @beemo/driver-prettier prettier\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @beemo/driver-prettier prettier\n")))),Object(i.b)("p",null,"Create a file at ",Object(i.b)("inlineCode",{parentName:"p"},"configs/prettier.ts")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"js"),") in which to house your Prettier configuration."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="configs/prettier.ts"',title:'"configs/prettier.ts"'},"import { PrettierConfig } from '@beemo/driver-prettier';\n\nconst config: PrettierConfig = {\n  arrowParens: 'always',\n  trailingComma: 'all',\n  // ...\n};\n\nexport default config;\n")),Object(i.b)("h2",{id:"integration"},"Integration"),Object(i.b)("p",null,"In your consuming project, enable the driver by adding ",Object(i.b)("inlineCode",{parentName:"p"},"prettier")," to your ",Object(i.b)("inlineCode",{parentName:"p"},"drivers")," config."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo.ts"',title:'".config/beemo.ts"'},"import { BeemoConfig } from '@beemo/core';\n\nconst config: BeemoConfig = {\n  module: '<config-module>',\n  drivers: ['prettier'],\n};\n\nexport default config;\n")),Object(i.b)("h2",{id:"ignoring-paths"},"Ignoring paths"),Object(i.b)("p",null,"Instead of using an ",Object(i.b)("inlineCode",{parentName:"p"},".prettierignore")," dotfile, you can define an ",Object(i.b)("inlineCode",{parentName:"p"},"ignore")," property in your\nconfiguration module's ",Object(i.b)("inlineCode",{parentName:"p"},"configs/prettier.ts")," file, or a project's ",Object(i.b)("inlineCode",{parentName:"p"},".config/beemo/prettier.ts")," file.\nThis property accepts an array of strings. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title=".prettierignore"',title:'".prettierignore"'},"lib/\n*.min.js\n")),Object(i.b)("p",null,"Becomes..."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo/prettier.ts"',title:'".config/beemo/prettier.ts"'},"import { PrettierConfig } from '@beemo/driver-prettier';\n\nconst config: PrettierConfig = {\n  // ...\n  ignore: ['lib/', '*.min.js', '*.map'],\n};\n\nexport default config;\n")),Object(i.b)("p",null,"This feature follows the same configuration lifecycle as ",Object(i.b)("inlineCode",{parentName:"p"},"prettier.config.js"),", with the added\nbenefit of conditional logic, and being generated at runtime!"))}p.isMDXComponent=!0}}]);