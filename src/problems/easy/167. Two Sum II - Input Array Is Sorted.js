/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
    }
  }
}

var twoSum2 = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    const total = numbers[left] + numbers[right]
    if (total > target) {
      right--
    } else if (total < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
}
