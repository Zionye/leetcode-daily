// https://leetcode.cn/problems/4sum-ii/description/

/**
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
    0 <= i, j, k, l < n
    nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

    示例 1：
    输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
    输出：2
    解释：
    两个元组如下：
    1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
    2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

    示例 2：
    输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
    输出：1
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// a+b+c+d = 0  => 0-(c+d) = a+b
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let tempMap = new Map();
  let tempVal;
  let result = 0;
  for (let i of nums1) {
    for (let j of nums2) {
      tempVal = tempMap.get(i + j);
      tempMap.set(i + j, tempVal ? tempVal + 1 : 1);
    }
  }
  for (let k of nums3) {
    for (let l of nums4) {
      tempVal = tempMap.get(0 - (k + l));
      if (tempVal) {
        result += tempVal;
      }
    }
  }
  return result;
};
fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]);
