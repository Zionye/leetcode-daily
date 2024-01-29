// https://leetcode.cn/problems/two-sum/description/

/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
  你可以按任意顺序返回答案。

  提示：只会存在一个有效答案。

  示例 1：
  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

  示例 2：
  输入：nums = [3,2,4], target = 6
  输出：[1,2]

  示例 3：
  输入：nums = [3,3], target = 6
  输出：[0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numMap = new Map();
  let numSet = [...new Set(nums)];
  nums.forEach((val, idx) => {
    if (numMap.has(val)) {
      let values = Array.isArray(numMap.get(val))
        ? numMap.get(val)
        : [numMap.get(val)];
      values.push(idx);
      numMap.set(val, values);
    } else {
      numMap.set(val, idx);
    }
  });

  let result = [];
  // size = numMap.size;
  for (let num of numSet) {
    let complement = target - num;
    let num1 = numMap.has(complement) ? numMap.has(complement) : undefined;

    if (!num1) {
      continue;
    }
    // if (num1) {
    if (num === complement && Array.isArray(numMap.get(num))) {
      result = numMap.get(num);
      return result;
    }
    // }
    if (num !== complement) {
      result[0] = numMap.get(num);
      result[1] = numMap.get(complement);
      return result;
    }
  }
  return result;
};
// twoSum([2, 7, 11, 15], 9); // [0,1]
// twoSum([3, 2, 4], 6); // [1,2]
// twoSum([3, 3], 6); // [0,1]
// twoSum([0, 4, 3, 0], 0); // [0, 3]
// twoSum([-1, -2, -3, -4, -5], -8); // [2,4]
twoSum([1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 11); // [5,11]
