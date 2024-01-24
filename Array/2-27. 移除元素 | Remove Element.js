// https://leetcode.cn/problems/remove-element/description/
// https://books.halfrost.com/leetcode/ChapterFour/0001~0099/0027.Remove-Element/

/**
 * 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
  不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

// 暴力解法
function removeElement2(nums, val) {
  let size = nums.length;
  for (let preIndex = 0; preIndex < size; preIndex++) {
    if (nums[preIndex] === val) {
      // 发现需要移除的元素，就将数组集体向前移动一位
      for (let nextIndex = preIndex + 1; nextIndex < size; nextIndex++) {
        nums[nextIndex - 1] = nums[nextIndex];
      }
      preIndex--; // 因为下标preIndex以后的数值都向前移动了一位，所以preIndex也向前移动一位
      size--; // 此时数组的大小-1
    }
  }
  return size;
}
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 双指针。fastIndex: 获取新数组元素的值； slowIndex: 更新新数组下标
function removeElement(nums, val) {
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex++] = nums[fastIndex];
    }
  }
  return slowIndex;
}
// removeElement([3, 2, 2, 3], 3);
// removeElement([0,1,2,2,3,0,4,2], 2);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
