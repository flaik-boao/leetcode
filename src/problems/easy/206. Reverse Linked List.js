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

// ??
// const reverseList = (head, accumulator = null) =>
//   head
//     ? reverseList(head.next, new ListNode(head.val, accumulator))
//     : accumulator

var reverseList = function (head) {
  let node = head
  if (!node || !node.next) return node
  let previousNode = null

  while (node) {
    let nextNode = node.next

    node.next = previousNode

    previousNode = node

    node = nextNode
  }

  return previousNode
}
