/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  const fn = (combinations, array) => {
    if (!array.length) return combinations;
    const digit = Number(array[0]);
    const choice = letters[digit - 2].split("");
    return fn(
      combinations.length
        ? combinations.reduce((acc, cur) => {
            return [...acc, ...choice.map((c) => cur + c)];
          }, [])
        : choice,
      array.slice(1)
    );
  };

  return fn([], digits.split(""));
};

console.log(letterCombinations("23"));
