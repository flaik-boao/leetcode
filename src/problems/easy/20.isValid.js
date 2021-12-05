/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === pair[c]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
};
