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

// console.log(addBinary("1010", "1011"))

// Runtime: 105 ms, faster than 23.45% of JavaScript online submissions for Add Binary.
// Memory Usage: 41.4 MB, less than 17.78% of JavaScript online submissions for Add Binary.

function addB(a, b) {
  let binaryA = a.split("")
  let binaryB = b.split("")
  if (binaryA.length > binaryB.length) {
    binaryB.unshift(...Array(binaryA.length - binaryB.length).fill(0))
  } else if (binaryA.length < binaryB.length) {
    binaryA.unshift(...Array(binaryB.length - binaryA.length).fill(0))
  }
  let accumulstaed = false
  const result = []
  for (let i = binaryA.length - 1; i >= 0; i--) {
    if (+binaryA[i] + +binaryB[i] == 2) {
      // two one
      result.unshift(accumulstaed ? 1 : 0)
      accumulstaed = true
    } else if (+binaryA[i] + +binaryB[i] == 1) {
      // one one
      if (accumulstaed) {
        result.unshift(0)
        accumulstaed = true
      } else {
        result.unshift(1)
        accumulstaed = false
      }
    } else {
      // no one
      result.unshift(accumulstaed ? 1 : 0)
      accumulstaed = false
    }
  }
  if (accumulstaed) {
    result.unshift(1)
  }
  return result.join("")
}

/**!SECTION
 *
 * 1000001
 * 0000001
 *
 * 1010
 * 1011
 * 10101
 */
function addB2(num1,num2){
  return conver10to2(+conver2to10(num1)+ +conver2to10(num2))
}
console.log(addB2("1010", "1011"))
console.log(addB2("1010", "10110"))
console.log(addB2("1", "10110"))
console.log(addB2("1", "1001"))
console.log(addB2("1", "1001"))

function conver2to10(num) {
  let binary = num.split("").reverse()
  binary = binary.map((v, index) => {
    if (v === "1") {
      //2^0
      return Math.pow(2, index)
    } else {
      return 0
    }
  })
  return binary.reduce((acc, current) => acc + current, 0)
}

console.assert(conver2to10("1001") == 9)

function conver10to2(str) {
  let n = +str
  const result = []
  while (n !== 0) {
    m = n % 2
    result.unshift("" + m)
    n = Math.floor(n / 2)
  }
  return result.join("")
}
console.log(conver10to2("12"))