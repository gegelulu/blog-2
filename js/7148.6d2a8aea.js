(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7148],{97148:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>c});var t=r(59713),o=r.n(t),l=r(6479),a=r.n(l),i=(r(67294),r(3905));function p(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function u(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){o()(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var s={};function c(n){var e=n.components,r=a()(n,["components"]);return(0,i.kt)("wrapper",u(u(u({},s),r),{},{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",null,"94.Binary Tree Inorder Traversal"),(0,i.kt)("p",null,"Given a binary tree, return the inorder traversal of its nodes' values."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"Input: [1,null,2,3]\n    1\n  /   \\\nnull   2\n      /\n    3\n\nOutput: [1,3,2]\n")),(0,i.kt)("p",null,"Follow up: Recursive solution is trivial, could you do it iteratively?"),(0,i.kt)("h3",null,"递归法"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function(root) {\n  if (root) {\n    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]\n  } else {\n    return []\n  }\n}\n")),(0,i.kt)("h3",null,"颜色标记法(迭代法, 模拟系统栈)"),(0,i.kt)("p",null,"使用",(0,i.kt)("inlineCode",{parentName:"p"},"颜色标记法"),"剖析树在中序遍历下的递归操作, 思路如下:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"将访问过的元素标记为灰色, 未访问过的元素标记为白色;"),(0,i.kt)("li",{parentName:"ol"},"从栈顶取出访问元素:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"若为灰色元素, 则打印之;"),(0,i.kt)("li",{parentName:"ol"},"若为白色元素, 按照",(0,i.kt)("inlineCode",{parentName:"li"},"右 -> 中 -> 左"),"的顺序推入栈, 同时将白色元素标记为灰色元素;")))),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"     4\n    / \\\n   2   5\n  / \\\n 1   3\n")),(0,i.kt)("p",null,"在如上所示树中, 模拟系统栈图解其执行过程如下:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"white 2\ngray  4\nwhite 5\n\nwhite 1\ngray  2\nwhite 3\ngray  4\nwhite 5\n\ngray  1\ngray  2\nwhite 3\ngray  4\nwhite 5\n\nwhite 3\ngray  4\nwhite 5\n")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function(root) {\n  const printArr = []\n  if (!root) return printArr\n  const stack = []\n  stack.push({\n    color: 'white',\n    node: root\n  })\n\n  while (stack.length > 0) {\n    const pickValue = stack.pop()\n    const { color, node } = pickValue\n    if (color === 'gray') {\n      printArr.push(node.val)\n    } else {\n      node.right && stack.push({ color: 'white', node: node.right })\n      stack.push({ color: 'gray', node })\n      node.left && stack.push({ color: 'white', node: node.left })\n    }\n  }\n\n  return printArr\n}\n")),(0,i.kt)("h3",null,"Sister Title"),(0,i.kt)("p",null,"144、94、145"))}c.isMDXComponent=!0}}]);