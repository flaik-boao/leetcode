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
var isValidBST = function (root) {
  const fn = (node) => {
    if (!node) return true;
    if (node.left && node.left.val >= node.val) return false;
    if (node.right && node.right.val <= node.val) return false;
    return fn(node.left) && fn(node.right);
  };
  return fn(root);
};

// [5,4,6,null,null,3,7]
//     5
// 4       6
//       3    7
