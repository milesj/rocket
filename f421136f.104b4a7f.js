(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},101:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},102:function(e,n,t){"use strict";var r=t(0),a=t(103);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},103:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},104:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(102),o=t(101),c=t(55),l=t.n(c),s=37,b=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),j=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(r.useState)(c),g=O[0],v=O[1],h=r.Children.toArray(e.children);if(null!=u){var y=j[u];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=u&&f(u,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},105:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(100)),o=t(104),c=t(105),l={title:"Provider setup"},s={unversionedId:"provider",id:"provider",isDocsHomePage:!1,title:"Provider setup",description:"To begin, create and clone a new repository on GitHub (or another VCS). This repository will be",source:"@site/docs/provider.mdx",slug:"/provider",permalink:"/docs/provider",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/provider.mdx",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Consumer setup",permalink:"/docs/consumer"}},b=[{value:"Installing Beemo",id:"installing-beemo",children:[]},{value:"Drivers",id:"drivers",children:[{value:"Config resolution",id:"config-resolution",children:[]}]},{value:"Scripts",id:"scripts",children:[{value:"Script resolution",id:"script-resolution",children:[]}]},{value:"Publishing",id:"publishing",children:[]}],p={toc:b};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,'To begin, create and clone a new repository on GitHub (or another VCS). This repository will be\nknown as your "configuration module" going forward. I suggest naming it ',Object(i.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dev-configs"),", or\n",Object(i.b)("inlineCode",{parentName:"p"},"build-tools"),", etc, as it's straight forward, easy to understand, and defines intent."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:<username>/dev.git\ncd dev/\n")),Object(i.b)("p",null,"Once cloned, initialize a new NPM package, and provide the package name with a username scope, like\n",Object(i.b)("inlineCode",{parentName:"p"},"@beemo/dev"),". Why a scope? Because we don't want to clutter NPM with common named packages. It also\navoids collisions and easily announces ownership."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm init --scope=<username>\n")),Object(i.b)("p",null,"Enter ",Object(i.b)("inlineCode",{parentName:"p"},"0.0.0")," for the version, and whatever you want for the remaining questions."),Object(i.b)("h2",{id:"installing-beemo"},"Installing Beemo"),Object(i.b)("p",null,"Now that we have a repository, we can install and setup Beemo."),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @beemo/core @beemo/cli\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @beemo/core @beemo/cli\n")))),Object(i.b)("p",null,'This will only install the core functionality. To support different developer tools like Babel,\nESLint, and Jest, we need to install packages known as "drivers"\n(',Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=beemo-driver"},"view all available drivers"),")."),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @beemo/driver-babel @babel/core\nyarn add @beemo/driver-eslint eslint\nyarn add @beemo/driver-jest jest\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @beemo/driver-babel @babel/core\nnpm install @beemo/driver-eslint eslint\nnpm install @beemo/driver-jest jest\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Drivers and their peer dependencies must be installed as production dependencies.")),Object(i.b)("h2",{id:"drivers"},"Drivers"),Object(i.b)("p",null,"For each driver you install, there should be an associated configuration file within a ",Object(i.b)("inlineCode",{parentName:"p"},"configs/"),'\nfolder, named after the camel-cased package name (excluding "driver-"). Using the example above,\nwe\'d have the following:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"configs/\n  babel.ts\n  eslint.ts\n  jest.ts\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The benefit of Beemo is that we can avoid different tooling conventions and standardize on a\nsingle implementation. No more ",Object(i.b)("inlineCode",{parentName:"p"},".foorc"),", ",Object(i.b)("inlineCode",{parentName:"p"},".foorc.js"),", or ",Object(i.b)("inlineCode",{parentName:"p"},".foorc.json")," nonsense. Just\n",Object(i.b)("inlineCode",{parentName:"p"},"configs/<driver>.ts")," (and .js too).")),Object(i.b)("p",null,"Each configuration file should return an object. Easy enough."),Object(i.b)(o.a,{groupId:"format",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="configs/babel.ts"',title:'"configs/babel.ts"'},"import { BabelConfig } from '@beemo/driver-babel';\n\nconst config: BabelConfig = {\n  presets: [\n    [\n      '@babel/preset-env',\n      {\n        targets: { node: 'current' },\n      },\n    ],\n  ],\n};\n\nexport default config;\n"))),Object(i.b)(c.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:'title="configs/babel.js"',title:'"configs/babel.js"'},"module.exports = {\n  presets: [\n    [\n      '@babel/preset-env',\n      {\n        targets: { node: 'current' },\n      },\n    ],\n  ],\n};\n")))),Object(i.b)("p",null,"You can access the command line args, the pipeline context, and the current\n",Object(i.b)("a",{parentName:"p",href:"/docs/tool"},"tool instance")," on ",Object(i.b)("inlineCode",{parentName:"p"},"process.beemo")," (which allows for runtime conditional logic). For\nexample, if ",Object(i.b)("inlineCode",{parentName:"p"},"--react")," was passed, we can enable the React preset."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="configs/babel.ts"',title:'"configs/babel.ts"'},"import { BabelConfig } from '@beemo/driver-babel';\n\nconst { context, tool } = process.beemo;\nconst presets: BabelConfig['presets'] = [\n  [\n    '@babel/preset-env',\n    {\n      targets: { node: 'current' },\n    },\n  ],\n];\n\nif (context.args.react) {\n  presets.push('@babel/preset-react');\n}\n\nexport default {\n  presets,\n};\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Command line arguments are parsed into an object using\n",Object(i.b)("a",{parentName:"p",href:"https://boostlib.dev/docs/args"},"@boost/args"),".")),Object(i.b)("h3",{id:"config-resolution"},"Config resolution"),Object(i.b)("p",null,"Configuration files are looked for and resolved in the following order:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"configs/<driver>.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"configs/<driver>.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/configs/<driver>.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lib/configs/<driver>.js"))),Object(i.b)("h2",{id:"scripts"},"Scripts"),Object(i.b)("p",null,"Beemo supports executing custom scripts found within your configuration module. To utilize a script,\ncreate a file (in PascalCase) within the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/")," folder, extend the ",Object(i.b)("inlineCode",{parentName:"p"},"Script")," class provided by\nBeemo, and define the ",Object(i.b)("inlineCode",{parentName:"p"},"execute()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"parse()")," methods."),Object(i.b)(o.a,{groupId:"format",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="scripts/InitProject.ts"',title:'"scripts/InitProject.ts"'},"import { Arguments, ParserOptions, Script, ScriptContext } from '@beemo/core';\n\ninterface InitProjectOptions {\n  dryRun: boolean;\n}\n\nclass InitProjectScript extends Script<InitProjectOptions> {\n  readonly name = 'init-project';\n\n  parse(): ParserOptions<InitProjectOptions> {\n    return {\n      dryRun: {\n        description: 'Execute a dry run',\n        type: 'boolean',\n      },\n    };\n  }\n\n  execute(context: ScriptContext, args: Arguments<InitProjectOptions>) {\n    if (args.dryRun) {\n      // Do something\n    }\n  }\n}\n\nexport default () => new InitProjectScript();\n"))),Object(i.b)(c.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:'title="scripts/InitProject.js"',title:'"scripts/InitProject.js"'},"const { Script } = require('@beemo/core');\n\nclass InitProjectScript extends Script {\n  name = 'init-project';\n\n  parse() {\n    return {\n      dryRun: {\n        description: 'Execute a dry run',\n        type: 'boolean',\n      },\n    };\n  }\n\n  execute(context, args) {\n    if (args.dryRun) {\n      // Do something\n    }\n  }\n}\n\nmodule.exports = () => new InitProjectScript();\n")))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"parse()")," method is optional but can be used to define parsing rules for CLI options (powered by\n",Object(i.b)("a",{parentName:"p",href:"https://boostlib.dev/docs/args"},"@boost/args"),"). If no rules are provided, default parsing rules will\nbe used."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"execute()")," method is required and is triggered when the ",Object(i.b)("inlineCode",{parentName:"p"},"beemo run-script")," command is ran. This\nmethod receives the current pipeline context as the 1st argument and options (parsed with ",Object(i.b)("inlineCode",{parentName:"p"},"parse()"),")\nas the 2nd argument. The ",Object(i.b)("a",{parentName:"p",href:"/docs/tool"},"Beemo Tool instance")," is available under ",Object(i.b)("inlineCode",{parentName:"p"},"this.tool"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Returning a promise in ",Object(i.b)("inlineCode",{parentName:"p"},"execute()")," is preferred.")),Object(i.b)("h3",{id:"script-resolution"},"Script resolution"),Object(i.b)("p",null,"Script files are looked for and resolved in the following order:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scripts/<script>.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scripts/<script>.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/scripts/<script>.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lib/scripts/<script>.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@beemo/script-<script>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"beemo-script-<script>"))),Object(i.b)("h2",{id:"publishing"},"Publishing"),Object(i.b)("p",null,"Now that Beemo and its drivers are installed, let's move forward by publishing your configuration\nmodule to NPM with public access. This is mandatory if using a scope."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm version minor\nnpm publish --access=public\n")),Object(i.b)("p",null,"You can also set the access in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "access": "public"\n  }\n}\n')))}u.isMDXComponent=!0}}]);