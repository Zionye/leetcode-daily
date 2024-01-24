// https://leetcode.cn/problems/search-insert-position/description/
// https://books.halfrost.com/leetcode/ChapterFour/0001~0099/0035.Search-Insert-Position/

/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
    请必须使用时间复杂度为 O(log n) 的算法。

    nums 为 无重复元素 的 升序 排列数组。

    示例 1:
    输入: nums = [1,3,5,6], target = 5
    输出: 2

    示例 2:
    输入: nums = [1,3,5,6], target = 2
    输出: 1

    示例 3:
    输入: nums = [1,3,5,6], target = 7
    输出: 4
 */

// [left, right]: eg -> [1,1]
function searchInsert(nums, target) {
  let middle = 0,
    left = 0,
    right = nums.length - 1; // 定义target在左闭右闭的区间里，[left, right]

  while (left <= right) {
    // 当left==right，区间[left, right]依然有效
    middle = left + ((right - left) >> 1); // 防止溢出 等同于(left + right)/2
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      // nums[middle] === target
      return middle;
    }
  }

  // 分别处理如下四种情况
  // 目标值在数组所有元素之前  [0, -1]
  // 目标值等于数组中某一个元素  return middle;
  // 目标值插入数组中的位置 [left, right]，return  right + 1
  // 目标值在数组所有元素之后的情况 [left, right]，这是右闭区间，所以  return right + 1
  return right + 1;
}

// [left, right): eg -> [1,1)
function searchInsert(nums, target) {
  let middle = 0,
    left = 0,
    right = nums.length; // 定义target在左闭右闭的区间里，[left, right)

  while (left < right) {
    middle = left + ((right - left) >> 1); // 防止溢出 等同于(left + right)/2
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      // nums[middle] === target
      return middle;
    }
  }

  // 分别处理如下四种情况
  // 目标值在数组所有元素之前 [0,0)
  // 目标值等于数组中某一个元素 return middle
  // 目标值插入数组中的位置 [left, right) ，return right 即可
  // 目标值在数组所有元素之后的情况 [left, right)，这是右开区间，return right 即可
  return right;
}
