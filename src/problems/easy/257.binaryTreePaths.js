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
      return [];
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

// [1,2,3,null,5]
console.log(
  binaryTreePaths({
    val: 1,
    left: { val: 2, left: null, right: { val: 5, left: null, right: null } },
    right: { val: 3, left: null, right: null },
  })
);

//          1
//     2           3
// x       5
