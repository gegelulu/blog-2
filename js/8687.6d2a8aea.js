(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8687],{88687:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var a=n(59713),r=n.n(a),l=n(6479),p=n.n(l),i=(n(67294),n(3905));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={};function o(t){var e=t.components,n=p()(t,["components"]);return(0,i.kt)("wrapper",b(b(b({},h),n),{},{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",null,"title"),(0,i.kt)("p",null,"给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。"),(0,i.kt)("p",null,"字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。"),(0,i.kt)("p",null,"说明："),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"字母异位词指字母相同，但排列不同的字符串"),"。\n不考虑答案输出的顺序。"),(0,i.kt)("p",null,"示例 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",b({parentName:"pre"},{className:"language-js"}),'输入:\ns: "cbaebabacd" p: "abc"\n\n输出:\n[0, 6]\n')),(0,i.kt)("p",null,'解释:\n起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。\n起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。'),(0,i.kt)("p",null,"示例 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",b({parentName:"pre"},{className:"language-js"}),'输入:\ns: "abab" p: "ab"\n\n输出:\n[0, 1, 2]\n')),(0,i.kt)("p",null,"示例 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",b({parentName:"pre"},{className:"language-js"}),'输入:\ns: "baa" p: "aa"\n\n输出:\n[1]\n')),(0,i.kt)("p",null,'解释:\n起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。\n起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。\n起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。'),(0,i.kt)("h3",null,"题解"),(0,i.kt)("p",null,"花了半天, 用类似滑动窗口的思想地解决了该题。思路如下:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"首先将 p 字符串中各字母出现的频率统计在 ",(0,i.kt)("inlineCode",{parentName:"li"},"targetObj"),";"),(0,i.kt)("li",{parentName:"ol"},"针对 s 字符创声明双指针 left、right",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"如若当前 right 的位置在 targetObj ",(0,i.kt)("inlineCode",{parentName:"li"},"有对应字段且其不大于")," targetObj 对应字段的值, 则向右偏移 right 指针的位置;"),(0,i.kt)("li",{parentName:"ol"},"如若当前 right 指针的位置在 targetObj ",(0,i.kt)("inlineCode",{parentName:"li"},"无对应字段"),", 则将 left 的位置移到 right 字段的位置;"),(0,i.kt)("li",{parentName:"ol"},"如若当前 right 指针的位置在 targetObj ",(0,i.kt)("inlineCode",{parentName:"li"},"有对应字段且大于")," targetObj 对应字段的值, 则向右偏移 left 指针的位置;")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"需要考虑的点, ",(0,i.kt)("inlineCode",{parentName:"p"},"字符串是否会重复"),"。比如 s 为 'baa', p 为 'aa'。")),(0,i.kt)("pre",null,(0,i.kt)("code",b({parentName:"pre"},{className:"language-js"}),"/**\n * @param {string} s\n * @param {string} p\n * @return {number[]}\n */\nvar findAnagrams = function(s, p) {\n  const pLength = p.length\n  const initHashObj = {} // 初始化 hash 对象\n  let hashObj = {}\n  const targetObj = {}\n  for (let i = 0; i < p.length; i++) {\n    targetObj[p[i]] = typeof(targetObj[p[i]]) === 'number' ? targetObj[p[i]] + 1 : 0\n    initHashObj[p[i]] = 0\n    hashObj[p[i]] = 0\n  }\n\n  const result = [] // 存储结果\n\n  let left = 0, right = 0\n\n  while (left < s.length && right < s.length) {\n    if (typeof(hashObj[s[right]]) === 'number' && hashObj[s[right]] <= targetObj[s[right]]) {\n      hashObj[s[right]] = hashObj[s[right]] + 1\n      if (right - left + 1 === pLength) result.push(left)\n      right++\n    } else if (typeof(hashObj[s[right]]) !== 'number') {\n      right++\n      left = right\n      hashObj = JSON.parse(JSON.stringify(initHashObj))\n    } else {\n      hashObj[s[left]] !== initHashObj[s[left]] && (hashObj[s[left]] = hashObj[s[left]] - 1)\n      left++\n    }\n  }\n\n  return result\n};\n")),(0,i.kt)("h3",null,"Sister Title"),(0,i.kt)("p",null,"76"))}o.isMDXComponent=!0}}]);