// https://leetcode.cn/problems/minimum-size-subarray-sum/description/

/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
  找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

  示例 1：
  输入：target = 7, nums = [2,3,1,2,4,3]
  输出：2
  解释：子数组 [4,3] 是该条件下的长度最小的子数组。

  示例 2：
  输入：target = 4, nums = [1,4,4]
  输出：1

  示例 3：
  输入：target = 11, nums = [1,1,1,1,1,1,1,1]
  输出：0
 */

// 滑动窗口思想（本质双指针思想）：不断的调节子序列的起始位置和终止位置。
var minSubArrayLen = function (target, nums) {
  let sum = 0, // 滑动窗口（子序列）数值之和
    i = 0, // 滑动窗口（子序列）起始位置
    // result = 0; // 滑动窗口（子序列）的长度
    result = Infinity; // 滑动窗口（子序列）的长度

  // 不断变更j（子序列的终止位置）
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      // result = j - i + 1;
      result = Math.min(result, j - i + 1);
      sum -= nums[i]; // 滑动窗口的精髓处：在j（子序列的终止位置）不变更的情况下，不断变更i（子序列的起始位置）
      i++;
    }
  }
  // return result;
  return result === Infinity ? 0 : result;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
// console.log(minSubArrayLen(7, [2, 3, 4, 1, 1, 0])); // 2
// console.log(minSubArrayLen(4, [1, 4, 4])); // 1
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8])); // 2
