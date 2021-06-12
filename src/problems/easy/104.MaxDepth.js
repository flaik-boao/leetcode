/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  const fn = (node, num) => {
    max = Math.max(num, max);
    return node
      ? [node.val, fn(node.left, num + 1), fn(node.right, num + 1)]
      : [null];
  };

  fn(root, 0);

  return max;
};
