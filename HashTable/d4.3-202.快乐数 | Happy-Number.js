// https://leetcode.cn/problems/happy-number/

/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
  「快乐数」 定义为：
  对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
  然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
  如果这个过程 结果为 1，那么这个数就是快乐数。
  如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

  示例 1：
  输入：n = 19
  输出：true
  解释：
  1^2 + 9^2 = 82
  8^2 + 2^2 = 68
  6^2 + 8^2 = 100
  1^2 + 0^2 + 0^2 = 1

  示例 2：
  输入：n = 2
  输出：false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var getSum = function (n) {
  let str = n.toString();
  let strArr = Array.from(str);
  let numArr = strArr.map(Number);

  let sum = 0;
  for (let i of numArr) {
    sum += i * i;
  }
  return sum;
};
var isHappy = function (n) {
  let sumMap = new Map();
  let num = n,
    sum = 0;
  while (true) {
    if (num !== 1 && sumMap.has(num)) return false; // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
    if (sumMap.get(num) === 1) return true;
    sum = getSum(num);
    sumMap.set(num, sum);
    num = sum;
  }
};
console.log("isHappy(19): ", isHappy(19));
// console.log("isHappy(2): ", isHappy(2));
