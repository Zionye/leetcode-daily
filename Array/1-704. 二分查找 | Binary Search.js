// https://leetcode.cn/problems/binary-search/
// https://books.halfrost.com/leetcode/ChapterFour/0700~0799/0704.Binary-Search/

/**
 * 
  * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

    示例 1:
    输入: nums = [-1,0,3,5,9,12], target = 9
    输出: 4
    解释: 9 出现在 nums 中并且下标为 4

    示例 2:
    输入: nums = [-1,0,3,5,9,12], target = 2
    输出: -1
    解释: 2 不存在 nums 中因此返回 -1

 */

// [left, right]: eg -> [1,1]
function search(nums, target) {
  let middle = 0,
    left = 0,
    right = nums.length - 1;
  while (left <= right) {
    // middle = (left + right) / 2;
    middle = left + ((right - left) >> 1); // (right - left) >> 1 表示将 right - left 除以 2，然后将结果向下取整。这相当于找到 left 和 right 之间的中间值。
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 2));

// [left, right): eg -> [1,1)
function search2(nums, target) {
  let middle = 0,
    left = 0,
    right = nums.length;
  while (left < right) {
    middle = left + ((right - left) >> 1);
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
// search2([-1, 0, 3, 5, 9, 12], 2);
