/**
 * Max Consecutive Ones
   
    Given a binary array, find the maximum number of consecutive 1s in this array.
    
    Example 1:

    Input: [1,1,0,1,1,1]
    Output: 3

    Explanation: The first two digits or the last three digits are consecutive 1s.
        The maximum number of consecutive 1s is 3.
    Note:

    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let max = 0
  let current = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current += 1
    } else {
      max = Math.max(current, max)
      current = 0
    }
  }
  if (nums[nums.length - 1] === 1) {
    max = Math.max(current, max)
  }
  return max
}

/**
 * Find Numbers with Even Number of Digits
 
    Given an array nums of integers, return how many of them contain an even number of digits.
 
    Example 1:

    Input: nums = [12,345,2,6,7896]
    Output: 2
    Explanation: 
    12 contains 2 digits (even number of digits). 
    345 contains 3 digits (odd number of digits). 
    2 contains 1 digit (odd number of digits). 
    6 contains 1 digit (odd number of digits). 
    7896 contains 4 digits (even number of digits). 
    Therefore only 12 and 7896 contain an even number of digits.

    Constraints:
        1 <= nums.length <= 500
        1 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => nums.filter((num) => `${num}`.length % 2 === 0).length

/**
 * Squares of a Sorted Array
    Solution
    Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

    Example 1:

    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]

    Note:

    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000
    A is sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b)

/**
 * Duplicate Zeros
    Solution
    Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

    Note that elements beyond the length of the original array are not written.

    Do the above modifications to the input array in place, do not return anything from your function.

    

    Example 1:

    Input: [1,0,2,3,0,4,5,0]
    Output: null
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

    Note:

    1 <= arr.length <= 10000
    0 <= arr[i] <= 9
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      arr.pop()
      arr.splice(i + 1, 0, 0)
      i++
    }
  }
}

/**
 * Merge Sorted Array
    Solution
    Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
    Example:

    Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i = 0
  let j = 0
  while (true) {
    if (j > n - 1) break
    if (i - j > m - 1) {
      nums1.splice(i, 0, ...nums2.slice(j, n))
      break
    }
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j])
      j++
    }
    i++
  }
  nums1.splice(m + n, nums1.length + nums2.length - m - n)
}

export { findMaxConsecutiveOnes, findNumbers, sortedSquares, duplicateZeros, merge }
