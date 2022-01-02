/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const say = (s) => {
    let result = ""
    let array = s.split("")
    let current = array[0]
    let count = 0
    for (i of array) {
      if (i === current) {
        count++
      } else {
        result += "" + count + current
        count = 1
        current = i
      }
    }
    result += "" + count + current
    return result
  }

  if (n === 1) return "1"
  return say(countAndSay(n - 1))
}

console.log(countAndSay(4))
