(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3624],{83624:n=>{n.exports="### 题目: 长度最小的子数组\n\n给定一个含有 n 个正整数的数组和一个正整数 s, 找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。\n\n示例: \n\n```js\n输入: s = 7, nums = [2,3,1,2,4,3]\n输出: 2\n解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。\n```\n\n进阶:\n\n如果你已经完成了 `O(n)` 时间复杂度的解法, 请尝试 `O(nlogn)` 时间复杂度的解法。\n\n### 解题\n\n思路: `滑动列表`。时间复杂度为 `O(n)`, 空间复杂度为 `1`。\n\n1. 取滑动列表 [left, right];\n2. 若列表 [left, right] 中的取值之和小于 s, 则列表的有边界 right 往右扩张。\n3. 若列表 [left, right] 中的取值之和大于 s, 则列表的左边界 left 往右扩张。\n\n```js\n/**\n * @param {number} s\n * @param {number[]} nums\n * @return {number}\n */\nvar minSubArrayLen = function(s, nums) {\n  let left = 0, right = -1 // [left, right], 左闭右闭\n  let minDistance = nums.length + 1 // 存储 left 与 right 间的距离\n  let sum = 0 // [left, right] 间值的总和\n  while (left < nums.length - 1) {\n    if (right < nums.length - 1 && sum < s) {\n      right++\n      sum = sum + nums[right]\n    } else {\n      sum = sum - nums[left]\n      left++\n    }\n    if (sum >= s) {\n      minDistance = Math.min(minDistance, right - left + 1)\n    }\n  }\n\n  if (minDistance === nums.length + 1) return 0\n\n  return minDistance\n}\n```\n\n### Sister Title\n\n3、76、209、438"}}]);