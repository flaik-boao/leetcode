const arrayToBST = (array) => {
  // [1,null,3,2,4,null,5,6]
  //   return {
  //     val: array.pop(),
  //     left: { val: array.pop() },
  //     right: { val: array.pop() },
  //   };

  const fn = (level, pos) => {
    const nodes = Array(Math.pow(2, level)).fill(array.pop());

    const a = {
      val: array[Math.pow(2, level + pos)],
      left: { val: array.pop() },
      right: { val: array.pop() },
    };
  };
};

//         1
//     2        3
// 4      5  6     7

const levelToPos = (level) => {
  if (level < 0) return 0;
  return Math.pow(2, level) + levelToPos(level - 1);
};

console.log(levelToPos(2));

module.exports.levelToPos;
module.exports.levelToPos;
