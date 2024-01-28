// https://leetcode.cn/problems/design-linked-list/

/**
 * 你可以选择使用单链表或者双链表，设计并实现自己的链表。
单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。
如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。

实现 MyLinkedList 类：
MyLinkedList() 初始化 MyLinkedList 对象。
int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。

示例：
输入
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
输出
[null, null, null, null, 2, null, 3]

解释
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
myLinkedList.get(1);              // 返回 3
 */

//单链表中的节点
class LinkNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val; // 当前节点的值
    this.next = next === undefined ? null : next; // 指向下一个节点的指针/引用
  }
}
// 单链表
var MyLinkedList = function (val, next) {
  this._head = null; // 头节点
  this._tail = null; // 尾节点
  this._size = 0; // 节点数量
};

// 获取链表中第 index 个节点
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size) return null;
  // 创建虚拟头节点
  let cur = new LinkNode(0, this._head);
  while (index-- >= 0) {
    cur = cur.next; // 操作节点 移动到下一个节点
  }
  return cur;
};
/**
 * 获取链表中第 index 个节点的值。如果下标无效，则返回 -1 。
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this._size) return -1;
  return this.getNode(index).val;
};

/**
 * 在链表的最前面插入一个节点。在插入完成后，新节点会成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new LinkNode(val, this._head); // 创建一个新节点
  this._head = newNode; // 将链表的头节点设置为新节点
  this._size++; // 链表的大小加1
  if (!this._tail) {
    // 链表为空
    this._tail = newNode; // 将尾节点 设置为 新节点
  }
};

/**
 * 在链表的最后面插入一个节点
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new LinkNode(val, null); // 创建一个新节点
  this._size++;
  if (this._tail) {
    // 链表不为空
    this._tail.next = newNode; // 将原尾节点的next指针 指向 新节点
    this._tail = newNode; // 将新节点 设置为 尾节点
    return;
  }
  this._tail = newNode;
  this._head = newNode;
};

/**
 * 在链表第index个节点前面插入一个节点。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return;
  if (index <= 0) {
    // // <= 0 的情况都是在头部插入
    this.addAtHead(val);
    return;
  }
  if (index === this._size) {
    this.addAtTail(val);
    return;
  }
  // 正常情况
  let prevNode = this.getNode(index - 1); // 获取插入位置的前一个节点
  let newNode = new LinkNode(val, prevNode.next); // 创建一个新节点
  prevNode.next = newNode;
  this._size++;
};

/**
 * 删除链表的第index个节点
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size) return;
  // 处理头节点
  if (index === 0) {
    this._head = this._head.next;
    // 如果删除的这个节点同时是尾节点，要处理尾节点
    if (index === this._size - 1) {
      this._tail = this._head;
    }
    this._size--;
    return;
  }

  let prevNode = this.getNode(index - 1); // 获取目标节点的上一个的节点
  prevNode.next = prevNode.next.next;

  // 处理尾节点
  if (index === this._size - 1) {
    this._tail = prevNode;
  }

  this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
