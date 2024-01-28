// https://leetcode.cn/problems/swap-nodes-in-pairs/description/

/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

    示例 1：
    输入：head = [1,2,3,4]
    输出：[2,1,4,3]

    示例 2：
    输入：head = []
    输出：[]

    示例 3：
    输入：head = [1]
    输出：[1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let cur = new ListNode(0, head),
    back = cur;
  while (back.next && back.next.next) {
    let cur = back.next.next,
      pre = back.next;
    pre.next = cur.next;
    cur.next = pre;
    back.next = cur;
    back = pre;
  }
  return cur.next;
};
