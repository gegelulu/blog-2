(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1684],{31684:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var l=e(59713),r=e.n(l),o=e(6479),a=e.n(o),c=(e(67294),e(3905));function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){r()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p={};function i(t){var n=t.components,e=a()(t,["components"]);return(0,c.kt)("wrapper",u(u(u({},p),e),{},{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h3",null,"call 函数实现"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"将函数引用到对象里")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"调用函数")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"删除对象里的函数"))),(0,c.kt)("pre",null,(0,c.kt)("code",u({parentName:"pre"},{className:"language-js"}),"Function.prototype.call1 = function (context) {\n  context.fn = this // this 指向实例\n  context.fn()\n  delete context.fn\n}\n\n// 测试:\nconst obj = {\n  value: 'muyy',\n}\n\nfunction testCall() {\n  console.log(this.value)\n}\n\nconst resultCall = testCall.call1(obj) // muyy\n")),(0,c.kt)("h3",null,"传入参数的实现"),(0,c.kt)("pre",null,(0,c.kt)("code",u({parentName:"pre"},{className:"language-js"}),"Function.prototype.call2 = function (context) {\n  const arr = Array.prototype.slice.call(arguments, 1)\n\n  context.fn = this // this 指向实例\n  context.fn(...arr)\n  delete context.fn\n}\n\n// 测试:\nconst obj2 = {\n  value: 'muyy',\n}\n\nfunction testCall2(age) {\n  console.log(this.value, age) // muyy 23\n}\n\nconst resultCall = testCall2.call2(obj2, 23)\n")))}i.isMDXComponent=!0}}]);