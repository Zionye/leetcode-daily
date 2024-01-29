// https://leetcode.cn/problems/intersection-of-two-arrays/

/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

    示例 1：
    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]

    示例 2：
    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[9,4]
    解释：[4,9] 也是可通过的
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 方式1
var intersection = function (nums1, nums2) {
  const numSet1 = [...new Set(nums1)];
  const numSet2 = [...new Set(nums2)];
  let minSet = new Set([...numSet1]);
  let maxSet = new Set([...numSet2]);
  let result = [];
  if (numSet1.size > numSet2.size) {
    minSet = new Set([...numSet2]);
    maxSet = new Set([...numSet1]);
  }
  for (let num of minSet) {
    if (maxSet.has(num)) result.push(num);
  }
  return result;
};

// 方式2
var intersection2 = function (nums1, nums2) {
  const numSet1 = [...new Set(nums1)];
  const resultSet = new Set();
  for (let num of nums2) {
    if (numSet1.indexOf(num) >= 0) resultSet.add(num);
  }
  return Array.from(resultSet);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
