// https://leetcode.cn/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let strArr = new Array(26).fill(0);
  const base = "a".charCodeAt();
  console.log(strArr, base);
  // 记录 magazine 里各个字符出现次数
  for (let m of magazine) {
    strArr[m.charCodeAt() - base]++;
  }
  for (let r of ransomNote) {
    // 如果没记录过直接返回false
    const flag = r.charCodeAt() - base;
    if (!strArr[flag]) return false;
    // 对应的字符个数做操作
    strArr[r.charCodeAt() - base]--;
  }
  return true;
};
canConstruct("aa", "abc");
