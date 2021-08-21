(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6423],{56423:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var r=t(59713),l=t.n(r),u=t(6479),s=t.n(u),a=(t(67294),t(3905));function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){l()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var p={};function m(n){var e=n.components,t=s()(n,["components"]);return(0,a.kt)("wrapper",i(i(i({},p),t),{},{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",null,"347.Top K Frequent Elements"),(0,a.kt)("p",null,"Given a non-empty array of integers, return the k most frequent elements."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"Example 1:\n\nInput: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"Input: nums = [1], k = 1\nOutput: [1]\n")),(0,a.kt)("p",null,"Note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You may assume k is always valid, 1 ≤ k ≤ number of unique elements."),(0,a.kt)("li",{parentName:"ul"},"Your algorithm's ",(0,a.kt)("inlineCode",{parentName:"li"},"time complexity must be better than O(n log n)"),", where n is the array's size."),(0,a.kt)("li",{parentName:"ul"},"It's guaranteed that ",(0,a.kt)("inlineCode",{parentName:"li"},"the answer is unique"),", in other words the set of the top k frequent elements is unique."),(0,a.kt)("li",{parentName:"ul"},"You can return the answer in any order.")),(0,a.kt)("h3",null,"Analyze"),(0,a.kt)("p",null,"思路一:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"将各个元素出现的频率统计进哈希表中;"),(0,a.kt)("li",{parentName:"ol"},"然后对出现频率进行排序;"),(0,a.kt)("li",{parentName:"ol"},"取频率排前 k 的元素;")),(0,a.kt)("p",null,"这样的时间复杂度为 O(nlog n) 级别。"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nvar topKFrequent = function(nums, k) {\n  const obj = {}\n  for (let i = 0; i < nums.length; i++) {\n    if (!obj[nums[i]]) {\n      obj[nums[i]] = 1\n    } else {\n      obj[nums[i]] = obj[nums[i]] + 1\n    }\n  }\n\n  const list = []\n\n  const keysArr = Object.keys(obj)\n  for (let i = 0; i < keysArr.length; i++) {\n    const key = keysArr[i]\n    const value = obj[key]\n    list.push({ key, value })\n  }\n\n  list.sort((r1, r2) => r2.value - r1.value)\n  const result = []\n  list.map((obj, index) => {\n    if (index < k) {\n      result.push(parseInt(obj.key, 10))\n    }\n  })\n  return result\n}\n")),(0,a.kt)("p",null,"该题解虽然可以 ac, 但是由于题目给出了时间复杂度需小于 ",(0,a.kt)("inlineCode",{parentName:"p"},"(n log n)")," 这一限制, 因而我们思考其它方式🤔。"),(0,a.kt)("p",null,"思路二: 桶排序分组的思想"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"首先将各个元素出现的频率统计进哈希表中;"),(0,a.kt)("li",{parentName:"ol"},"将频率减去 1 后的值作为数组 list 的下标存入;"),(0,a.kt)("li",{parentName:"ol"},"从 list 中遍历取出频率最高的 k 个元素;")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nvar topKFrequent = function(nums, k) {\n  const obj = {}\n  for (let i = 0; i < nums.length; i++) {\n    if (!obj[nums[i]]) {\n      obj[nums[i]] = 1\n    } else {\n      obj[nums[i]] = obj[nums[i]] + 1\n    }\n  }\n\n  const list = []\n\n  const keysArr = Object.keys(obj)\n  for (let i = 0; i < keysArr.length; i++) {\n    const key = keysArr[i]\n    const value = obj[key]\n    if (!list[value - 1]) {\n      list[value - 1] = [parseInt(key, 10)]\n    } else {\n      list[value - 1].push(parseInt(key, 10))\n    }\n  }\n\n  const result = []\n  let count = 0\n  for (let i = list.length - 1; i >= 0; i--) {\n    const curList = list[i]\n    if (curList) {\n      for (let x = 0; x < curList.length; x++) {\n        if (count === k) return result\n        result.push(curList[x])\n        count++\n      }\n    }\n  }\n  return result\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",i({parentName:"p"},{src:"http://with.muyunyun.cn/926ca1b564c07610790ab1e0e4cafa6f.jpg",alt:null}))))}m.isMDXComponent=!0}}]);