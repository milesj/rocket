(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),u=r,d=f["".concat(i,".").concat(u)]||f[u]||m[u]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(100)),i={title:"Scaffolding"},c={unversionedId:"scaffolding",id:"scaffolding",isDocsHomePage:!1,title:"Scaffolding",description:"Beemo can scaffold projects through the amazing hygen library.",source:"@site/docs/scaffolding.md",slug:"/scaffolding",permalink:"/docs/scaffolding",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/scaffolding.md",version:"current",sidebar:"docs",previous:{title:"Event-driven tooling",permalink:"/docs/events"},next:{title:"Workspaces",permalink:"/docs/workspaces"}},l=[{value:"Creating templates",id:"creating-templates",children:[]},{value:"Generating files",id:"generating-files",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Beemo can scaffold projects through the amazing ",Object(a.b)("a",{parentName:"p",href:"https://github.com/jondot/hygen"},"hygen"),' library.\nHygen separates templates into groupings of "generators" and "actions", coupling a front matter\nconcept with ',Object(a.b)("a",{parentName:"p",href:"http://ejs.co/"},"ejs"),", to deliver a powerful and convenient experience."),Object(a.b)("h2",{id:"creating-templates"},"Creating templates"),Object(a.b)("p",null,"To make use of scaffolds, create ",Object(a.b)("inlineCode",{parentName:"p"},".ejs")," files within your configuration module, located at\n",Object(a.b)("inlineCode",{parentName:"p"},"templates/<generator>/<action>"),". For example, if I wanted to scaffold dotfiles, I may create the\nfollowing template for a ",Object(a.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text",metastring:'title="templates/project/dotfiles/gitignore.ejs"',title:'"templates/project/dotfiles/gitignore.ejs"'},"---\nto: .gitignore\n---\nnode_modules/\nlogs/\n*.log\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Hygen uses front matter to define target destination, overwrite rules, and more.\n",Object(a.b)("a",{parentName:"p",href:"http://www.hygen.io/templates"},"View the official documentation for more information"),".")),Object(a.b)("h2",{id:"generating-files"},"Generating files"),Object(a.b)("p",null,"Once our templates exist, we can generate files within our consumer using the\n",Object(a.b)("inlineCode",{parentName:"p"},"yarn beemo scaffold <generator> <action>")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"npx beemo scaffold"),") command. This command will copy\nall files from the template folder to the ",Object(a.b)("inlineCode",{parentName:"p"},"to")," target defined in the ",Object(a.b)("inlineCode",{parentName:"p"},".ejs")," front matter."),Object(a.b)("p",null,"You can also define template variables through command line options like ",Object(a.b)("inlineCode",{parentName:"p"},"--name"),"!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Beemo doesn't support Hygen prompts at the moment, so any existing files will be\noverwritten.")))}s.isMDXComponent=!0}}]);