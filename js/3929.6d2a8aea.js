(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3929],{23929:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});var r=t(59713),o=t.n(r),c=t(6479),s=t.n(c),a=(t(67294),t(3905));function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i={};function l(e){var n=e.components,t=s()(e,["components"]);return(0,a.kt)("wrapper",u(u(u({},i),t),{},{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",null,"第二版测试: 封装 request,response,context 对象"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const Koa = require('../application')\n\nconst app = new Koa()\n\n// // 测试自定义扩展\n// app.context.handle = function (errNo = 0, data, errMsg) {\n//   this.res.setHeader('Content-Type', 'application/json;charset=utf-8')\n//   // 注意 this 指向调用函数的对象, 也就是 ctx\n//   this.body = {\n//     errNo,\n//     data,\n//     errMsg\n//   }\n// }\n\n// // 调用自定义扩展\n// app.use(async (ctx) => {\n//   ctx.handle({\n//     errNo: 0,\n//     data: {\n//       name: '小明',\n//     },\n//     errMsg: 'success',\n//   })\n// })\n\n// 第二版最主要目的是把 app.use(req, res) 参数转化为简洁的写法如下:\napp.use(async (ctx) => {\n  ctx.body = `hello ${ctx.query.name}`\n})\n\napp.listen(3000, '127.0.0.1', () => {\n  console.log('listening on the 3000')\n})\n")))}l.isMDXComponent=!0}}]);