(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7371],{7371:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var n=a(59713),l=a.n(n),r=a(6479),i=a.n(r),p=(a(67294),a(3905));function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){l()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var N={};function o(t){var e=t.components,a=i()(t,["components"]);return(0,p.kt)("wrapper",k(k(k({},N),a),{},{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"文本属性"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"text-indent"),": 文本缩进。",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"注意只能用于块级元素;"),(0,p.kt)("li",{parentName:"ul"},"子元素使用百分数等相关声明值的时候孙子元素继承的是具体值;"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"text-align"),": 对齐方式。",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"有 ",(0,p.kt)("inlineCode",{parentName:"li"},"left、center、right、justify")," 这几个属性;"),(0,p.kt)("li",{parentName:"ul"},"justify 的含义是两边缘对齐, 中间用空格填补;"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"line-height"),": 行高。",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"行高与 ",(0,p.kt)("inlineCode",{parentName:"li"},"font-size")," 之差为行间距;"),(0,p.kt)("li",{parentName:"ul"},"文本垂直居中可以这样写:")))),(0,p.kt)("pre",null,(0,p.kt)("code",k({parentName:"pre"},{className:"language-css"}),".demo {\n  font-size: 13px;\n  line-height: 13px;\n}\n\n/* 效果等于 */\n\n.demo {\n  font-size: 13px;\n  line-height: 1;\n}\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"vertical-align"),": 垂直对齐文本。",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"适用于",(0,p.kt)("inlineCode",{parentName:"li"},"行内元素"),"以及表格元素;"),(0,p.kt)("li",{parentName:"ul"},"后面跟百分数是相对使用该属性节点本身 ",(0,p.kt)("inlineCode",{parentName:"li"},"line-height")," 计算的;")))),(0,p.kt)("p",null,(0,p.kt)("img",k({parentName:"p"},{src:"http://with.muyunyun.cn/0183be5dea65edfa32a0fc5e7b0b3d12.jpg",alt:null}))),(0,p.kt)("p",null,"解答: vertical-align 默认属性是 baseline, 多出的高度是「幽灵空白节点」的 line-height 的占位。详细解答可见 ",(0,p.kt)("a",k({parentName:"p"},{href:"https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/"}),"CSS 深入理解 vertical-align 和 line-height 的基友关系")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"text-transform"),": 文本转换。",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"uppercase"),"、",(0,p.kt)("inlineCode",{parentName:"li"},"lowercase"),"、",(0,p.kt)("inlineCode",{parentName:"li"},"capitalize")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"text-decration"),": 文本装饰。",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"underline"),"、",(0,p.kt)("inlineCode",{parentName:"li"},"outerline"),"、",(0,p.kt)("inlineCode",{parentName:"li"},"line-through"),";"),(0,p.kt)("li",{parentName:"ul"},"该属性不会继承;"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"white-space"),": 处理换行符。",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"其属性值见下列表格, 不太好记忆, 用得最多的是 normal(默认) 以及 nowrap, 大体知道带 pre 的是会保留换行符的, 用到的时候查表。")))),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",k({parentName:"tr"},{align:"left"}),"值"),(0,p.kt)("th",k({parentName:"tr"},{align:"left"}),"空白符"),(0,p.kt)("th",k({parentName:"tr"},{align:"left"}),"换行符"),(0,p.kt)("th",k({parentName:"tr"},{align:"left"}),"自动换行"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"normal"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"合并"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"忽略"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"允许")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"nowrap"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"合并"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"忽略"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"不允许")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"pre"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"保留"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"保留"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"不允许")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"pre-line"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"合并"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"保留"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"允许")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"pre-wrap"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"保留"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"保留"),(0,p.kt)("td",k({parentName:"tr"},{align:"left"}),"允许")))),(0,p.kt)("p",null,"阅读完第 6 章"))}o.isMDXComponent=!0}}]);