/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let num = 0
  while (true) {
    if (num * num <= x) num++
    else break
  }
  return num - 1
}

var fn = function (x) {
  let left = 0
  let right = x
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid == x) {
      return mid
    } else if (mid * mid > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
}

console.log(fn(4))
