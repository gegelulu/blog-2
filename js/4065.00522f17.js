(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4065],{64065:n=>{n.exports="### 120. Triangle\n\nGiven a triangle array, return the `minimum path sum` from top to bottom.\n\nFor each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either `index i` or `index i + 1` on the next row.\n\nExample 1:\n\n```js\nInput: triangle = [[2], [3,4], [6,5,7], [4,1,8,3]]\n2 3 6 1\n2 3 5 1\nOutput: 11\nExplanation: The triangle looks like:\n   2\n  3 4\n 6 5 7\n4 1 8 3\nThe minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).\n```\n\nExample 2:\n\n```js\nInput: triangle = [[-10]]\nOutput: -10\n```\n\n* Constraints:\n  * 1 <= triangle.length <= 200\n  * triangle[0].length == 1\n  * triangle[i].length == triangle[i - 1].length + 1\n  * -104 <= triangle[i][j] <= 104\n \nFollow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?\n\n### Analyze\n\n```js\n2\n3 4\n6 5 7\n```\n\n根据题意如果当前值的下标为 `(m, n)`, 则其下一个数的下标为 `(m + 1， n)` 或者 `(m + 1, n + 1)`。\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n  const cache = { smallest: Infinity }\n  getSmaller(triangle, 0, 0, 0, cache)\n  return cache.smallest\n}\n\n// m: witch row\n// n: witch column\n// result: current min value\nvar getSmaller = function(triangle, m, n, result, cache) {\n  const sum = result + (triangle[m][n] ? triangle[m][n] : 0)\n  if (m === triangle.length - 1) {\n    cache.smallest = Math.min(cache.smallest, sum)\n    return\n  }\n\n  getSmaller(triangle, m + 1, n, sum, cache)\n  getSmaller(triangle, m + 1, n + 1, sum, cache)\n}\n```\n\n此时提交的时候执行时间超时, 开始优化!\n\n首先使用 `f(m, n) = Math.min(f(m + 1, n), f(m + 1, n + 1)) + triangle[m][n]` 优化代码精简代码如下:\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n  return getSmaller(triangle, 0, 0)\n}\n\n// m: witch row\n// n: witch column\nvar getSmaller = function(triangle, m, n) {\n  if (m === triangle.length - 1) {\n    return triangle[m][n]\n  }\n  const a = getSmaller(triangle, m + 1, n)\n  const b = getSmaller(triangle, m + 1, n + 1)\n  return (a < b ? a : b) + triangle[m][n]\n}\n```\n\n以 `triangle = [[2], [3,4], [6,5,7]]` 为例, 当前 `getSmaller` 函数执行次数为 7。调用栈如下:\n\n```js\nvalue 2\nvalue 3\nvalue 6\nvalue 5 <-\nvalue 4\nvalue 5 <-\nvalue 7\n```\n\n此时可以发现箭头处有两处相同的调用, 故而可以使用缓存减少调用栈的次数。缓存优化如下:\n\ntodo:\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n  return getSmaller(triangle, 0, 0)\n}\n\n// m: witch row\n// n: witch column\nvar getSmaller = function(triangle, m, n) {\n  if (m === triangle.length - 1) {\n    return triangle[m][n]\n  }\n  const a = getSmaller(triangle, m + 1, n)\n  const b = getSmaller(triangle, m + 1, n + 1)\n  return (a < b ? a : b) + triangle[m][n]\n}\n```\n\ntodo: 从底向上\n\n```js\n/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n\n}\n```\n\n```js\n输入：\n[[-1],[2,3],[1,-1,-3]]\n输出：\n0\n预期：\n-1\n```\n"}}]);