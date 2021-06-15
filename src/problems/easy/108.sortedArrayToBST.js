/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const bst = (array) => {
    if (array.length === 0) return null;
    const mid = parseInt(array.length / 2);
    return {
      val: array[mid],
      left: bst(array.slice(0, mid)),
      right: bst(array.slice(mid + 1)),
    };
  };
  return bst(nums);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
