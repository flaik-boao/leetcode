/**
 * @param {number} columnNumber
 * @return {string}
 */
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

var convertToTitle = function (columnNumber) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const rest = Math.floor(columnNumber / 26)
  console.log(rest)
  console.log(columnNumber % 26)
  return (
    (rest > 26
      ? convertToTitle(Math.floor(rest))
      : rest > 0
      ? characters[Math.floor(rest) - 1]
      : "") + characters[(columnNumber % 26) - 1]
  )
}

console.log(convertToTitle(26))
// console.log(convertToTitle(701))
// console.log(convertToTitle(1))
// console.log(convertToTitle(28))
