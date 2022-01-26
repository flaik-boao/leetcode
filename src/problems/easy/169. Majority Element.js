/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const dict = {}
  for (let index = 0; index < nums.length; index++) {
    if (dict[nums[index]]) {
      dict[nums[index]] = dict[nums[index]] + 1
    } else {
      dict[nums[index]] = 1
    }
    if (dict[nums[index]] > num.length / 2) {
      return num[index]
    }
  }
}
