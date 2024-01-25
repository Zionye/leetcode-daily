// https://leetcode.cn/problems/spiral-matrix-ii/description/

/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
    示例 1：
    输入：n = 3
    输出：[[1,2,3],[8,9,4],[7,6,5]]

    示例 2：
    输入：n = 1
    输出：[[1]]
 */

var generateMatrix = function (n) {
  let startX = (startY = 0), // 起始位置
    rotateNum = (mid = n >> 1), // 旋转圈数、中间位置
    elementNum = 1, // 元素数
    offset = 1, // 空白边界
    result = new Array(n).fill(0).map(() => new Array(n).fill());

  // 循环不变量原则。左闭右开
  while (rotateNum--) {
    let row = startX,
      col = startY;
    // 上边（从左到右）
    for (; col < n - offset; col++) {
      result[row][col] = elementNum++;
    }
    // 右边（从上到下）
    for (; row < n - offset; row++) {
      result[row][col] = elementNum++;
    }
    // 下边（从右到左）
    for (; col > startY; col--) {
      result[row][col] = elementNum++;
    }
    // 左边（从下到上）
    for (; row > startX; row--) {
      result[row][col] = elementNum++;
    }

    startX++;
    startY++;
    offset++;
  }

  // n为奇数
  if (mid !== n / 2) {
    result[mid][mid] = elementNum;
  }
  return result;
};
console.log(generateMatrix(5));
console.log(generateMatrix(6));
