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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const fn = (node, current) => {
    if (!node) {
      return false;
    } else if (!node.left && !node.right) {
      return current + node.val === targetSum;
    } else {
      return (
        fn(node.left, current + node.val) || fn(node.right, current + node.val)
      );
    }
  };
  return fn(root, 0);
};

var hasPathSum2 = function (root, targetSum) {
  const sums = [];

  if (!root) return false;

  const path = (node, sum) => {
    if (!node) {
      return;
    } else if (!node.left && !node.right) {
      sums.push(sum + node.val);
      return;
    }

    path(node.left, sum + node.val);
    path(node.right, sum + node.val);
  };

  path(root, 0);

  console.log(sums);
  return sums.includes(targetSum);
};

console.log(
  hasPathSum(
    {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    5
  )
);
