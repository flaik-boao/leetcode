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
  const nodes = []
  let currentNode = head

  if (!currentNode) return false

  while (currentNode.next) {
    if (nodes.find((_) => _ === currentNode.next)) return true
    nodes.push(currentNode)
    currentNode = currentNode.next
  }
  return false
}
