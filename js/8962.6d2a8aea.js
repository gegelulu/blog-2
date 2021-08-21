(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8962],{18962:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>m});var l=e(59713),r=e.n(l),a=e(6479),u=e.n(a),p=(e(67294),e(3905));function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,l)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){r()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var c={};function m(n){var t=n.components,e=u()(n,["components"]);return(0,p.kt)("wrapper",s(s(s({},c),e),{},{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"一个时间复杂度的问题"),(0,p.kt)("p",null,"有一个字符串数组, 将数组中的每一个字符串按照字母序进行排序; 然后再将整个字符串数组按照字典序进行排序; 时间复杂度是多少?"),(0,p.kt)("details",null,(0,p.kt)("summary",null,"解析"),(0,p.kt)("p",null,"假设数组中最长的字符串长度为 s, 有 n 个字符串。"),(0,p.kt)("p",null,"对每一个字符串按照字母序进行排序: ",(0,p.kt)("inlineCode",{parentName:"p"},"n * slogs"),"\n对整个字符串数组按照字典序进行排序: ",(0,p.kt)("inlineCode",{parentName:"p"},"s * nlogn")," (比如比较 'abc' 和 'abd' 两个字符串的顺序, 需要比较到第 s 位字母, 所以需要乘上 3。)"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"排序默认为 O(nlogn) 的复杂度"))),(0,p.kt)("h3",null,"简单的复杂度分析"),(0,p.kt)("h4",null,"O(n^2)"),(0,p.kt)("p",null,"如下是 ",(0,p.kt)("a",s({parentName:"p"},{href:"./%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.md"}),"选择排序")," 中的代码片段:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var chooseSort = function(arr) {\n  for (let x = 0; x < arr.length; x++) {\n    let min = x\n    for (let y = x + 1; y < arr.length; y++) {\n      if (arr[y] < arr[min]) {\n        min = y\n      }\n    }\n    let tmp = arr[x]\n    arr[x] = arr[min]\n    arr[min] = tmp\n  }\n  return arr\n}\n")),(0,p.kt)("p",null,"分析其时间复杂度"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"(n - 1) + (n - 2) + (n - 3) + ... + 0 = (n - 1 + 0) * n / 2 ≈ O(n^2)\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"需注意的是并不是所有有两重遍历循环的算法时间复杂度都是 O(n^2)"),"。"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"function demo1(n) {\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < 30; j++) {\n      ...\n    }\n  }\n}\n")),(0,p.kt)("p",null,"在 demo1 函数中, 因为内层循环的次数为常量 30, 所以其时间复杂度为 ",(0,p.kt)("inlineCode",{parentName:"p"},"30 * n ≈ O(n)")),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"function demo2(n) {\n  for (let i = 0; i < n; i += i) {\n    for (let j = 0; j < n; j++) {\n      ...\n    }\n  }\n}\n")),(0,p.kt)("p",null,"在 demo2 函数中, 外层循环循环的次数 ",(0,p.kt)("img",s({parentName:"p"},{src:"http://with.muyunyun.cn/b4705e227e4b5c5616b7eb81cfe082cb.jpg",alt:null})),", 所以其复杂度也不是 O(n^2) 而是 O(logN)。"),(0,p.kt)("h4",null,"O(logN)"),(0,p.kt)("p",null,"如下是 ",(0,p.kt)("a",s({parentName:"p"},{href:"./%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md"}),"二分查找")," 中的代码片段:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// arr 为指定数组, target 为目标元素\nfunction binarysearch(arr, target) {\n  let left = 0\n  let right = arr.length - 1\n  while (left <= right) {\n    const middlePoint = Math.floor((left + right) / 2)\n    let middle = arr[middlePoint]\n    if (middle > target) {\n      right = middlePoint - 1\n    } else if (middle < target) {\n      left = middlePoint + 1\n    } else {\n      return middle\n    }\n  }\n\n  return '数组中目标元素不存在'\n}\n")),(0,p.kt)("p",null,"分析其时间复杂度。"),(0,p.kt)("p",null,"假设数据总量为 N, 因为二分查找每次会减少一半的数据,\n所以经过 1 次后, 数据剩下为 N / 2,\n经过 2 次后, 数据剩下为 N / 2^2,\n二分查找的极限是最后剩下 1 个数据, 假设经过 m 次后, 达到极限, N / 2^m = 1, 即 ",(0,p.kt)("img",s({parentName:"p"},{src:"http://with.muyunyun.cn/894f6426601047921de80c181e3656c2.jpg",alt:null})),", 所以时间复杂度为 logN；"),(0,p.kt)("p",null,"题目: 现在有一个 1~1000 区间中的正整数, 需要你猜下这个数字是几, 你只能问一个问题: 大了还是小了？问需要猜几次才能猜对？"),(0,p.kt)("p",null,"答: 根据二分查找的时间复杂度为 logN, 所以题目可以转化为求 log1000 的值, 2^10 = 1024, 所以最多猜 10 次就能猜对;"),(0,p.kt)("h3",null,"数据规模"),(0,p.kt)("p",null,"以 JavaScript 这门语言为例, 书写如下函数"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"function main() {\n for (let i = 1; i <= 10; i++) {\n   let n = Math.pow(10, i)\n   console.time('start')\n   let sum = 0\n   for (let x = 0; x < n; x++) {\n     sum += x\n   }\n   console.log(`10^${i}`)\n   console.timeEnd('start')\n }\n}\n")),(0,p.kt)("p",null,"运行结果为:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"10^1\n  start: 0.14892578125ms\n10^2\n  start: 0.071044921875ms\n10^3\n  start: 0.074951171875ms\n10^4\n  start: 0.232177734375ms\n10^5\n  start: 4.281982421875ms\n10^6\n  start: 0.97509765625ms\n10^7\n  start: 8.960205078125ms\n10^8\n  start: 90.760986328125ms\n10^9\n  start: 887.587890625ms\n10^10\n  start: 13403.979248046875ms\n")),(0,p.kt)("p",null,"可以得出如下结论:"),(0,p.kt)("p",null,"使用 JavaScript 如果想让其在 1 s 内完成任务, 数据规模的要求如下:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"O(n^2) 算法可以处理 10^4 级别的数据;"),(0,p.kt)("li",{parentName:"ul"},"O(n) 算法可以处理 10^8 / 10^9 级别的数据;"),(0,p.kt)("li",{parentName:"ul"},"O(nlogn) 算法可以处理 10^7 数据的级别;")),(0,p.kt)("h3",null,"测试自己算法的复杂度"),(0,p.kt)("p",null,"思路: 将数据规模乘 2, 观察对应时间的增长关系。"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"function testComplexity(fn) {\n  for (let i = 10, i < 15, i++) {\n    const total = Math.pow(2, i)\n    const mockArr = new Array(total)\n    console.time('test')\n    /* fn 为算法函数, 这里仅仅作为 demo 演示 */\n    fn(mockArr)\n    console.end('test')\n  }\n}\n")),(0,p.kt)("h3",null,"递归算法的时间复杂度分析"),(0,p.kt)("h4",null,"递归中进行单次递归调用"),(0,p.kt)("p",null,"单次递归算法的时间复杂度 = 深度 * 递归函数的时间复杂度"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"在单次递归算法调用中, 深度就为递归函数执行次数")),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"/* 求 1 + 2 + 3 + ... + n */\nfunction sum(n) {\n  if (n === 0) return 0\n  return n + sum(n - 1)\n}\n")),(0,p.kt)("p",null,"比如在 sum 函数中, 深度为 n, 递归函数的时间复杂度为 1, 所以该函数的时间复杂度为 O(n)。"),(0,p.kt)("h4",null,"递归中进行多次递归调用"),(0,p.kt)("p",null,"递归中进行多次递归调用, 建议画图来辅助分析。"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"function f(n) {\n  if (n === 0) return 0\n  return f(n - 1) + f(n - 1)\n}\n")),(0,p.kt)("p",null,(0,p.kt)("img",s({parentName:"p"},{src:"http://with.muyunyun.cn/5a60c47aeae5a5750c0146555584894a.jpg",alt:null}))),(0,p.kt)("p",null,(0,p.kt)("img",s({parentName:"p"},{src:"http://with.muyunyun.cn/8290ad6f0cb7df00b2862c1d7996e54c.jpg",alt:null}))),(0,p.kt)("h3",null,"link"),(0,p.kt)("p",null,"等差数列前 n 项和公式:"),(0,p.kt)("pre",null,(0,p.kt)("code",s({parentName:"pre"},{className:"language-js"}),"* Sn = [n*(a1+an)]/2\n* Sn = a1*n + [n*(n-1)*d]/2\n* Sn = d/2*n²+(a1-d/2)*n\n")),(0,p.kt)("p",null,"等比数列前 n 项和公式:"),(0,p.kt)("p",null,(0,p.kt)("img",s({parentName:"p"},{src:"http://with.muyunyun.cn/0a2db22818ecc056aa95e6ab75c8c903.jpg",alt:null}))),(0,p.kt)("p",null,"排列组合公式:"),(0,p.kt)("p",null,(0,p.kt)("img",s({parentName:"p"},{src:"http://with.muyunyun.cn/468350f2ebca84bb44fc2108dc43efc0.jpg-400",alt:null}))))}m.isMDXComponent=!0}}]);