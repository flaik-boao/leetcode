/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const nodes = new Set()
  let currentNode = head

  if (!currentNode) return false

  while (currentNode) {
    if (nodes.has(currentNode.next)) return true
    nodes.add(currentNode.next)
    currentNode = currentNode.next
  }
  return false
}
