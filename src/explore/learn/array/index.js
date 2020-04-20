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
    if (j > n - 1) {
      nums1.splice(m + n, nums1.length + nums2.length - m - n)
      break
    }
    if (i - j > m - 1) {
      nums1.splice(i, nums1.length + nums2.length - m - n, ...nums2.slice(j, n))
      break
    }
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j])
      j++
    }
    i++
  }
}

/**
 * Remove Element
    Given an array nums and a value val, remove all instances of that value in-place and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    The order of elements can be changed. It doesn't matter what you leave beyond the new length.

    Example 1:

    Given nums = [3,2,2,3], val = 3,

    Your function should return length = 2, with the first two elements of nums being 2.

    It doesn't matter what you leave beyond the returned length.
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

/**
 * Remove Duplicates from Sorted Array
    Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    Example 1:

    Given nums = [1,1,2],

    Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

    It doesn't matter what you leave beyond the returned length.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = function(nums) {
//     for(let i = 0;i<nums.length-1;i++){
//         if(nums[i]===nums[i+1]){
//             nums.splice(i,1)
//             i--
//         }
//     }
//     return nums.length
// };
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

/**
 * Check If N and Its Double Exist
    Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

    More formally check if there exists two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]
    

    Example 1:

    Input: arr = [10,2,5,3]
    Output: true
    Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) return true
    }
  }
  return false
}

/**
 * Valid Mountain Array
    Given an array A of integers, return true if and only if it is a valid mountain array.

    Recall that A is a mountain array if and only if:

    A.length >= 3
    There exists some i with 0 < i < A.length - 1 such that:
    A[0] < A[1] < ... A[i-1] < A[i]
    A[i] > A[i+1] > ... > A[A.length - 1]

    Example 1:

    Input: [2,1]
    Output: false
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function (A) {
  if (A.length < 3) return false
  let direction = ''
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      if (direction === 'down') return false
      direction = 'up'
    } else if (A[i] > A[i + 1]) {
      if (direction === '') return false
      direction = 'down'
    } else return false
  }
  if (direction === 'up') return false
  return true
}

/**
 * Replace Elements with Greatest Element on Right Side
    Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

    After doing so, return the array.

    

    Example 1:

    Input: arr = [17,18,5,4,6,1]
    Output: [18,6,6,6,1,-1]

    Constraints:

    1 <= arr.length <= 10^4
    1 <= arr[i] <= 10^5
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  let array = [-1]
  let max = -1
  for (let i = arr.length - 1; i > 0; i--) {
    max = Math.max(max, arr[i])
    array.unshift(max)
  }
  return array
}

/**
 * Move Zeroes
    Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Example:

    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
    Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      if (i !== j) nums[i] = 0
      j++
    }
  }
}

/**
 * Sort Array By Parity
    Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

    You may return any answer array that satisfies this condition.

    Example 1:

    Input: [3,1,2,4]
    Output: [2,4,3,1]
    The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
    
    Note:

    1 <= A.length <= 5000
    0 <= A[i] <= 5000
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function (A) {
  let j = 0
  let temp = null
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      temp = A[j]
      A[j] = A[i]
      A[i] = temp
      j++
    }
  }
  return A
}

/**
 * Height Checker
    Students are asked to stand in non-decreasing order of heights for an annual photo.

    Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

    Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

    

    Example 1:

    Input: heights = [1,1,4,2,1,3]
    Output: 3
    Explanation: 
    Current array : [1,1,4,2,1,3]
    Target array  : [1,1,1,2,3,4]
    On index 2 (0-based) we have 4 vs 1 so we have to move this student.
    On index 4 (0-based) we have 1 vs 3 so we have to move this student.
    On index 5 (0-based) we have 3 vs 4 so we have to move this student.
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const origin = heights.slice()
  heights.sort((a, b) => a - b)
  return origin.filter((height, i) => height !== heights[i]).length
}

export {
  findMaxConsecutiveOnes,
  findNumbers,
  sortedSquares,
  duplicateZeros,
  merge,
  removeElement,
  removeDuplicates,
  checkIfExist,
  validMountainArray,
  replaceElements,
  moveZeroes,
  sortArrayByParity,
  heightChecker,
}
