/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return columnTitle
    .split("")
    .map((c, index) => {
      if (columnTitle.length - index - 1 === 0) return options.indexOf(c) + 1
      return (options.indexOf(c) + 1) * 26 ** (columnTitle.length - index - 1)
    })
    .reduce((a, b) => a + b, 0)
}

console.log(titleToNumber("ZY"))
