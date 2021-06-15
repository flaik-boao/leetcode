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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];

  const fn = (node, path) => {
    if (!node) {
      return;
    } else if (!node.left && !node.right) {
      paths.push([...path, node.val]);
    } else {
      fn(node.left, [...path, node.val]);
      fn(node.right, [...path, node.val]);
    }
  };

  fn(root, []);

  return paths.map((path) => path.join("->"));
};
