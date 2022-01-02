/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const history = new Set()

  const fn = (number) => {
    if (history.has(number)) return false
    history.add(number)
    const digits = (number + "").split("")
    const sum = digits.map((_) => _ * _).reduce((a, b) => a + b, 0)
    return sum === 1 ? true : fn(sum)
  }
  return fn(n)
}

console.log(isHappy(19))
console.log(isHappy(2))
console.log(isHappy(7))
