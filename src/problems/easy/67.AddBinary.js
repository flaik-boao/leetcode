/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let a_arr = a.split("").map(Number)
  let b_arr = b.split("").map(Number)
  let c = []
  let maxLength = Math.max(a.length, b.length)

  let tmp = 0
  for (let i = 0; i < maxLength; i++) {
    const cur =
      (a_arr[a_arr.length - 1 - i] || 0) +
      (b_arr[b_arr.length - 1 - i] || 0) +
      tmp
    tmp = 0
    if (cur > 1) {
      tmp = 1
      c.unshift(cur - 2)
    } else {
      c.unshift(cur)
    }
  }
  if (tmp) {
    c.unshift(tmp)
  }
  return c.join("")
}

/**
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

console.log(addBinary("1010", "1011"))

// Runtime: 105 ms, faster than 23.45% of JavaScript online submissions for Add Binary.
// Memory Usage: 41.4 MB, less than 17.78% of JavaScript online submissions for Add Binary.
