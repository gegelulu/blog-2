(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4330],{24330:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>k});var l=t(59713),a=t.n(l),o=t(6479),p=t.n(o),r=(t(67294),t(3905));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c={};function k(e){var n=e.components,t=p()(e,["components"]);return(0,r.kt)("wrapper",u(u(u({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",null,"红皮书里的细节"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"理念: 尽信书则不如无书")),(0,r.kt)("h3",null,"重载"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Java/C++")," 中是有函数重载的(即相同函数名, 但传的参数不同是当成不同函数的), 而 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," 没有函数重载, 旧其本质是因为 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScrit")," 中函数是一个对象。函数名类似一个指针。"),(0,r.kt)("h3",null,"label 语句的用法"),(0,r.kt)("p",null,"区分以下两段函数:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"let num = 0\nfor (let i = 0; i < 10; i++) {\n  for (let j = 0; j < 10; j++) {\n    if (i === 5 && j === 5) {\n      break\n    }\n    num++\n  }\n}\nconsole.log(num) // 95\n")),(0,r.kt)("p",null,"使用 label 语句:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"let num = 0\noutPoint:\nfor (let i = 0; i < 10; i++) {\n  for (let j = 0; j < 10; j++) {\n    if (i === 5 && j === 5) {\n      break outPoint\n    }\n    num++\n  }\n}\nconsole.log(num) // 55\n")),(0,r.kt)("h3",null,"函数声明和函数表达式"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"以 ",(0,r.kt)("inlineCode",{parentName:"li"},"function")," 开头的是函数声明, 不是以 ",(0,r.kt)("inlineCode",{parentName:"li"},"function")," 开头的则是函数表达式"),(0,r.kt)("li",{parentName:"ul"},"函数声明具有函数声明提升的概念(function decleration hoisting)")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// 函数声明\nfunction test() {}\n\n// 函数表达式\nconst test = function() {}\n\n// 函数表达式\n(function(){})()\n")),(0,r.kt)("p",null,"函数声明提升"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"var a = function() {\n  test()\n  function test() {\n    console.log('函数声明提升')\n  }\n}\n\na()\n")),(0,r.kt)("h3",null,"属性类型"),(0,r.kt)("p",null,"大体针对 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()"),"、",(0,r.kt)("inlineCode",{parentName:"p"},"Object.defineProperties")," 这两个 api 来讲的。使用这两个 api 创建的对象里的数据类型和访问器类型默认为 false(Configuble、Enummerable、Writable) 以及 undefined(Value、Set、Get)。"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"注意: 在对象上直接定义的属性, Configurable、Enumerable、Writable 默认为 true")),(0,r.kt)("h4",null,"数据类型"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configurable: 是否能 delete"),(0,r.kt)("li",{parentName:"ul"},"Enumerable"),(0,r.kt)("li",{parentName:"ul"},"Writable"),(0,r.kt)("li",{parentName:"ul"},"Value")),(0,r.kt)("h4",null,"访问器类型"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configurable"),(0,r.kt)("li",{parentName:"ul"},"Enumerable"),(0,r.kt)("li",{parentName:"ul"},"Writable"),(0,r.kt)("li",{parentName:"ul"},"Get"),(0,r.kt)("li",{parentName:"ul"},"Set")),(0,r.kt)("h3",null,"创建对象的方式"),(0,r.kt)("p",null,"这部分知识点和继承相通, 可联系起来；"),(0,r.kt)("h4",null,"工厂模式"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function createPeople(name, age) {\n  const obj = new Object()\n  obj.name = name\n  obj.age = age\n  return obj\n}\n\ncreatePeople('Jack', 10)\n")),(0,r.kt)("p",null,"缺点: 不知道创造的对象属于什么类"),(0,r.kt)("h4",null,"构造函数模式"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function People(name, age) {\n  this.name = name\n  this.age = age\n  this.sayHi = function() { console.log('hi') }\n}\n\nconst people1 = new People('Jack', 10)\nconst people2 = new People('Lucy', 8)\n\npeople1.sayHi === people2.sayHi // false\n")),(0,r.kt)("p",null,"优点: 能将自定义参数传入构造函数\n缺点: 没有解决公共方法的复用性(是缺点也是优点, 后面有用到这个特性)"),(0,r.kt)("h4",null,"原型链模式"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function People(name, age) {\n  this.name = name\n  this.age = age\n}\n\nPeople.prototype.sayHi = function() { console.log('hi') }\nPeople.prototype.habbit = ['reading']\n\nconst people1 = new People('Jack', 10)\nconst people2 = new People('Lucy', 8)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"原型模式实际上必须结合构造函数一起使用, 但在这里为了说明原型模式的缺点, 单独列了出来。")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// 结果\npeople1.sayHi === people2.sayHi // true\n\npeople1.habbit.push('drawing')\npeople2.habbit // ['reading', drawing]\n")),(0,r.kt)("p",null,"优点: 解决公共方法的复用性(sayHi)；\n缺点: 也正是复用性, 所以在一个实例上修改 prototype 上的属性会对其它实例也产生相同影响(habbit)；"),(0,r.kt)("h4",null,"构造函数模式 + 原型链模式"),(0,r.kt)("p",null,"这个模式也是目前被大家最为认可的一种方式, 对上述例子稍作修改:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function People(name, age) {\n  this.name = name\n  this.age = age\n  this.habbit = ['reading']\n}\n\nPeople.prototype.sayHi = function() { console.log('hi') }\n\nconst people1 = new People('Jack', 10)\nconst people2 = new People('Lucy', 8)\n\n// 结果\npeople1.sayHi === people2.sayHi // true\n\npeople1.habbit.push('drawing')\npeople2.habbit // [\"reading\"]\n")),(0,r.kt)("p",null,"现在能直观地看到, people1 和 people2 公用同一个 sayHi 方法, 但是其它的属性 name、age、habbit 都是各自独立拥有的。"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"结论: 所谓的构造函数模式 + 原型链模式即公有方法使用原型链模式, 私有方法使用构造函数模式；从而发挥各自的优点。")),(0,r.kt)("h3",null,"继承"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/MuYunyun/blog/blob/master/BasicSkill/readES6/%E7%BB%A7%E6%89%BF.md"}),"继承优化"))),(0,r.kt)("h3",null,"const/let 出现的原因"),(0,r.kt)("p",null,"提到块级作用域可以联系到 'const/let 出现的原因' 或者 'var 的缺点'"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// 案例 1\nvar a = 1\nvar a\n\na // 1\n\n------------\n\n// 案例 2\nvar a = 1\nvar a = 2\n\na // 2\n")),(0,r.kt)("p",null,"可以看到使用 var 并不会告知之前是否已经声明过该变量, 案例 1 直接无视了后续的声明, 案例 2 后续的声明覆盖了前面的声明, 这样子使用起来便有些混乱了。这也是 const/let 出现的原因, const 专注案例 1 的情形, let 则专注案例 2 的情形。"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// 案例 1\nconst a = 1\nconst a\n\n// Uncaught SyntaxError: Missing initializer in const declaration\n\n------------\n\n// 案例 2\nlet a = 1\nlet a = 2\n\na // 2\n")),(0,r.kt)("h3",null,"块级作用域"),(0,r.kt)("p",null,"关键字: 匿名函数"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"(function() {\n  // 块级作用域\n})()\n")),(0,r.kt)("p",null,"因为没有引用指向匿名函数, 所以执行完就可以垃圾回收, 不造成内存浪费。"),(0,r.kt)("h3",null,"作用域安全的构造函数"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function Safe(value) {\n  if (this instanceof Safe) {\n    this.name = value\n  } else {\n    return new Safe(value)\n  }\n}\n")),(0,r.kt)("p",null,"这种写法不管使用 ",(0,r.kt)("inlineCode",{parentName:"p"},"new Safe()")," 还是 ",(0,r.kt)("inlineCode",{parentName:"p"},"Safe()")," 能保证它们返回结果一致(作用域一致)。"),(0,r.kt)("h3",null,"防篡改对象"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object.preventExtensions(obj)"),": obj 不能添加属性"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object.seal(obj)"),": obj 不能添加/删除属性"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object.freeze(obj)"),": obj 不能添加/删除/修改属性")),(0,r.kt)("h3",null,"防抖和节流函数最简版"),(0,r.kt)("p",null,"防抖: 多次触发事件只执行一次(适用于断续的事件, 比如 ",(0,r.kt)("inlineCode",{parentName:"p"},"click"),"、",(0,r.kt)("inlineCode",{parentName:"p"},"input"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function debounce(fn, time) {\n  let timeout\n  return () => {\n    if (timeout) {\n      clearTimeout(timeout)\n    }\n    timeout = setTimeout({\n      fn\n    }, time)\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"建议: 面试的时候先写出如上形式, 如果有时间再考虑实现带 ",(0,r.kt)("inlineCode",{parentName:"p"},"immediate")," 形式的防抖函数。")),(0,r.kt)("p",null,"节流: 在指定时间内多次触发事件只执行一次(适用于连续的事件, 比如 ",(0,r.kt)("inlineCode",{parentName:"p"},"scroll"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"function throttle(fn, time) {\n  let preTime = 0\n  return () => {\n    const remainTime = time - (Date.now() - preTime)\n    if (remainTime <= 0) {\n      fn()\n      preTime = Date.now()\n    }\n  }\n}\n")))}k.isMDXComponent=!0}}]);