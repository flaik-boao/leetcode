/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = []

  const nextLine = (array) => {
    const line = []
    for (let index = 0; index < array.length - 1; index++) {
      line.push(array[index] + array[index + 1])
    }
    return [1, ...line, 1]
  }

  for (let index = 0; index < numRows; index++) {
    // console.log(result)
    if (index === 0) result.push([1])
    else result.push(nextLine(result[index - 1]))
  }
  return result
}

console.log(generate(5))
