(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6244],{76244:(n,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>s});var t=e(59713),a=e.n(t),p=e(6479),l=e.n(p),i=(e(67294),e(3905));function o(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}function u(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){a()(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}var c={};function s(n){var r=n.components,e=l()(n,["components"]);return(0,i.kt)("wrapper",u(u(u({},c),e),{},{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",null,"Heap Sort"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"prefix knowlege: ",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/MuYunyun/blog/blob/master/Algorithm/data_structure/heap.md"}),"heap"))),(0,i.kt)("p",null,"题目: 给定数组 ",(0,i.kt)("inlineCode",{parentName:"p"},"[5, 2, 7, 3, 1, 8, 4]"),", 使用堆排序对其进行升序排列。"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"步骤一: 构造大顶堆;")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"          5\n        ↙   ↘ convert\n     2         7\n          |\n    因为子节点 7 大于 5, 因此作 convert, 结果如下\n          ↓\n\n          7\n        ↙   ↘\n     2         5\n          |\n    依此类推, 构造出大顶堆。\n          ↓\n\n           8\n        ↙     ↘\n     3          7\n  ↙    ↘      ↙   ↘\n2        1  5       4\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"步骤二: 取出顶部元素, 将数组末尾元素移到顶部(目的是为了保持移除了顶部元素后的数组长度减少 1);"),(0,i.kt)("li",{parentName:"ul"},"步骤三: 如果存在顶部元素的子元素大于顶部元素的情形, 对调它们(维持 max heap);")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"           8\n        ↙     ↘\n     3          7\n  ↙    ↘      ↙   ↘\n2        1  5       4\n          |\n  取出顶部 8, 将数组末尾元素 4 移到顶部\n          ↓\n\n           4\n        ↙     ↘ (对调)\n     3          7\n  ↙    ↘      ↙\n2        1  5\n          |\n  如果存在顶部元素的子元素大于顶部元素的情形, 对调它们, 重新构造 max heap.\n          ↓\n\n           7\n        ↙     ↘\n     3          4\n  ↙    ↘      ↙\n2        1  5\n          |\n  重复上述 3 个步骤, 直到堆中的元素为空\n\n")),(0,i.kt)("p",null,"下面来实现上述步骤:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"var heap_sort = function(arr) {\n  const result = []\n  let material = arr\n\n  while (material.length > 0) {\n    const maxHeapArr = builtMaxHeap(material)\n    result.unshift(maxHeapArr[0])\n    maxHeapArr[0] = maxHeapArr[maxHeapArr.length - 1]\n    material = maxHeapArr.slice(0, maxHeapArr.length - 1)\n  }\n\n  return result\n}\n\n// input: [5, 2, 7, 3, 1, 8, 4]\n// output: to build big heap [8, 3, 7, 2, 1, 5, 4]\nvar builtMaxHeap = function(arr) {\n  let parent, compareChild\n  for (let i = 0; i < arr.length; i++) {\n    parent = Math.floor((i - 1) / 2)\n    compareChild = i\n    while (parent >= 0) {\n      if (arr[parent] < arr[compareChild]) {\n        swap(arr, parent, compareChild)\n        compareChild = parent\n        parent = Math.floor((compareChild - 1) / 2)\n      } else {\n        parent = -1\n      }\n    }\n  }\n  return arr\n}\n\n// swap two value in arr\nvar swap = function(arr, pointOne, pointTwo) {\n  const tmp = arr[pointOne]\n  arr[pointOne] = arr[pointTwo]\n  arr[pointTwo] = tmp\n}\n")),(0,i.kt)("p",null,"理想情况下, 堆排序时间复杂度应为 nlogn, 空间复杂度应为 1, 上述实现的代码中没有达到这一复杂度的。参考社区代码后重写:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"由 len 控制执行时机;"),(0,i.kt)("li",{parentName:"ul"},"对 arr 进行操作不引入额外变量;")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"var len\nvar heap_sort = function(arr) {\n  buildMaxHeapify(arr)\n\n  while (len > 1) {\n    swap(arr, len - 1, 0)\n    len--\n    keepMaxHeapify(arr, 0)\n  }\n\n  return arr\n}\n\n\n/**\n * to build max heapify from bottom to top;\n * the last subscript's parent subscript is Math.floor((len - 1) / 2)\n */\nvar buildMaxHeapify = function(arr) {\n  len = arr.length\n\n  for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {\n    keepMaxHeapify(arr, i)\n  }\n}\n\n/**\n * to keep max heap\n */\nvar keepMaxHeapify = function(arr, i) {\n  const left = 2 * i + 1\n  const right = 2 * i + 2\n  let maxSubscript = i\n\n  if (left < len && arr[left] > arr[maxSubscript]) {\n    maxSubscript = left\n  }\n\n  if (right < len && arr[right] > arr[maxSubscript]) {\n    maxSubscript = right\n  }\n\n  if (maxSubscript !== i) {\n    swap(arr, maxSubscript, i)\n    keepMaxHeapify(arr, maxSubscript)\n  }\n}\n\n/**\n * swap two value in arr\n */\nvar swap = function(arr, pointOne, pointTwo) {\n  const tmp = arr[pointOne]\n  arr[pointOne] = arr[pointTwo]\n  arr[pointTwo] = tmp\n}\n")))}s.isMDXComponent=!0}}]);