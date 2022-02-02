/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = new Set()
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          result.add([nums[i], nums[j], nums[k]].sort().join(" "))
      }
    }
  }
  console.log(Array.from(result).map((_) => _.split(" ").map((_) => Number(_))))
  return Array.from(result).map((_) => _.split(" ").map((_) => Number(_)))
}

threeSum([-1, 0, 1, 2, -1, -4])
