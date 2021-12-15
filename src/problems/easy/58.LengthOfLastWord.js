/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Runtime: 95 ms, faster than 17.29% of JavaScript online submissions for Length of Last Word.
  // Memory Usage: 38.1 MB, less than 97.70% of JavaScript online submissions for Length of Last Word.
//   return  s.trim().split(" ").slice(-1)[0].length

  let length = 0;
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === " " && length === 0) continue;
    if (s[i] === " " && length !== 0) break;
    length++;
  }
  return length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
