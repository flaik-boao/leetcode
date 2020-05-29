/**
 * 
 * 3. Longest Substring Without Repeating Characters
 * Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 
 */
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
  let length = 0;
  let array = [];
  for (const c of s) {
    if (array.indexOf(c) === -1) {
      array.push(c);
      length = Math.max(length, array.length);
    } else {
      array.push(c);
      array = array.slice(array.indexOf(c) + 1);
    }
  }
  return length;
};

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
export const twoSum = function(nums, target) {
   for(const x of nums){
       
   }
};