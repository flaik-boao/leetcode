/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0

  for (let i = 0; i < prices.length - 1; i++) {
    let maxEnd = 0
    for (let j = i + 1; j < prices.length; j++) {
      maxEnd = Math.max(maxEnd, prices[j])
    }
    console.log(prices[i], maxEnd)
    max = Math.max(max, maxEnd - prices[i])
  }
  return max
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
