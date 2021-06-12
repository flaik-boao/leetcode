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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return (
    fn(root.left, true).flat().join("") ===
    fn(root.right, false).flat().join("")
  );
};

const fn = (node, flag) =>
  node
    ? [
        node.val,
        fn(flag ? node.left : node.right, flag),
        fn(flag ? node.right : node.left, flag),
      ]
    : ["null"];
