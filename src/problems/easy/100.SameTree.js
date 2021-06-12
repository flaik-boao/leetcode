/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return fn(p).flat().join("") === fn(q).flat().join("");
};

const fn = (node) =>
  node ? [node.val, fn(node.left), fn(node.right)] : ["null"];

/**
 * JSON.stringify(p) === JSON.stringify(q)
 *
 */
