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
var deleteDuplicates = function (head) {
  const fn = (node) => {
    if (!node) return
    while (node.val === node.next?.val) node.next = node.next.next

    fn(node.next)
  }
  fn(head)
  return head
}

var deleteDuplicates2 = function (head) {
  if (!head) return head
  let slow = head
  let fast = head.next

  while (fast) {
    if (slow.val === fast.val) {
      fast = fast.next
    } else {
      slow.next = fast
      slow = fast
      fast = fast.next
    }
  }
  slow.next = fast
  return head
}
