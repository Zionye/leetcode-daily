// https://leetcode.cn/problems/4sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 双指针法
// a + b + c + d = target
var fourSum = function (nums, target) {
  let res = [],
    len = nums.length;
  if (len < 4) return res;
  // 将数组排序(从小到大)
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
    let fNum = nums[i];
    // 一级剪枝操作(此时将  nums[i] 看成一个整体)
    // if (fNum > target && (fNum >= 0 || target >= 0)) return res;
    // 一级去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < len - 2; j++) {
      let sNum = nums[i] + nums[j];
      // 二级剪枝操作(此时将  nums[i]+nums[j] 看成一个整体)
      //   if (sNum > target && (sNum >= 0 || target >= 0)) return res;
      // 二级去重
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1,
        right = len - 1;
      while (left < right) {
        let lNum = nums[left],
          rNum = nums[right],
          fourNum = sNum + lNum + rNum;

        if (fourNum > target) {
          right--;
          continue;
        } else if (fourNum < target) {
          left++;
          continue;
        } else {
          res.push([nums[i], nums[j], lNum, rNum]);
          // 对nums[left]和nums[right]去重
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
  }
  return res;
};
// fourSum([1, 2, 3, 4]);
