// https://leetcode.cn/problems/squares-of-a-sorted-array/description/

/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

    示例 1：
    输入：nums = [-4,-1,0,3,10]
    输出：[0,1,9,16,100]
    解释：平方后，数组变为 [16,1,0,9,100]
    排序后，数组变为 [0,1,9,16,100]

    示例 2：
    输入：nums = [-7,-3,2,3,11]
    输出：[4,9,9,49,121]
 */

var sortedSquares = function (nums) {
  let right = nums.length - 1,
    k = right,
    result = new Array(right).fill(0);
  for (let left = 0; left <= right; ) {
    let pre = nums[left] * nums[left],
      back = nums[right] * nums[right];
    if (pre > back) {
      result[k--] = pre;
      left++;
    } else {
      result[k--] = back;
      right--;
    }
  }
  return result;
};
console.log(sortedSquares([-7, -3, 2, 3, 11]));
