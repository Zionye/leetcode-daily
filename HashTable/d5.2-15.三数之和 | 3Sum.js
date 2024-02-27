// https://leetcode.cn/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 双指针法
// a + b + c = 0
var threeSum = function (nums) {
  const res = [],
    len = nums.length;
  // 将数组排序(从小到大)
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    let iNum = nums[i];
    // 数组排序过，如果第一个数大于0直接返回res
    if (iNum > 0) return res;
    // 对 a 去重
    if (i > 0 && iNum === nums[i - 1]) continue;

    let left = i + 1,
      right = len - 1;
    while (left < right) {
      // 如果 left === right ，那么是同一个数了
      let lNum = nums[left],
        rNum = nums[right],
        threeSum = iNum + lNum + rNum;
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        res.push([iNum, lNum, rNum]);

        // 对 b、c 去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }
  return res;
};
