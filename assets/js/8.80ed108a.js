(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("COMPATIBILITY NOTE")]),t._v(" "),e("p",[t._v("To use Velvet, you need PHP ≥ 7.2")])]),t._v(" "),e("p",[t._v("Although using Vue's syntax, Velvet does not require any Javascript runtime on server (i.e. Node)")]),t._v(" "),e("p",[t._v("Velvet also has zero dependency, so rest assure from conflicts with other package")]),t._v(" "),e("h2",{attrs:{id:"some-note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#some-note","aria-hidden":"true"}},[t._v("#")]),t._v(" Some note")]),t._v(" "),e("p",[e("strong",[t._v("Velvet only support "),e("strong",[t._v("evergreen")]),t._v(" browser")])]),t._v(" "),e("p",[t._v("The reason is the lack of transpiler (e.g. babel). So we only serve ES6+ modules to client.")]),t._v(" "),e("h2",{attrs:{id:"installing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),e("h3",{attrs:{id:"via-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#via-composer","aria-hidden":"true"}},[t._v("#")]),t._v(" Via Composer")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("composer require velvet/velvet\n")])])]),e("h3",{attrs:{id:"alternatively-you-can-just-clone-the-repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alternatively-you-can-just-clone-the-repo","aria-hidden":"true"}},[t._v("#")]),t._v(" Alternatively you can just clone the repo")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b master https://github.com/trandinhbao/velvet\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[e("strong",[t._v("If you use composer")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'vendor/autoload.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Velvet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Velvet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),e("p",[e("strong",[t._v("...or if you not")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'lib/Velvet.php'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change this to the correct path of the cloned Velvet.php file")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Velvet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Velvet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),e("p",[e("strong",[t._v("Create a simple Velvet instance")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$velvet")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Velvet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/template'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/cache'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$velvet")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("# This will render the file front.vue, passing the data {message: 'Hello World'}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$velvet")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"front"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'message'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Hello World'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);