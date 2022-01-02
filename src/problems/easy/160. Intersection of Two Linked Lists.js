/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA
  let nodeB = headB

  if (headA === headB) return headA

  const nodes = []
  while (nodeA || nodeB) {
    if (nodeA) {
      if (nodes.find((_) => _ === nodeA)) return nodeA
      nodes.push(nodeA)
      nodeA = nodeA.next
    }
    if (nodeB) {
      if (nodes.find((_) => _ === nodeB)) return nodeB
      nodes.push(nodeB)
      nodeB = nodeB.next
    }
  }
  return null
}
