/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n >= 2) {
    return climbStairs(n - 1) + climbStairs(n - 2)
  } else {
    return 1
  }
}
var climbStairs2 = function (n) {
    const dp = {}
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i - 2];
    }
    return dp[n];
}

// 1 step & 2 step

console.log(climbStairs2(0))
console.log(climbStairs2(1))
console.log(climbStairs2(45))
//             fn4              fn3
//     fn3         fn2      fn2     fn1
// fn2      fn1

/**
 *                    fn(5)
 *            fn(4)1                   fn(3)2
 *       1          2         1        2
 *  1       2    1     2*  1    2*  1*
 * 1  2*  1*   1*         1*
 * 1*
 */
