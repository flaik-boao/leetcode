// TODO - 
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const getBoxes = (board) => [
    [...board[0].slice(0, 3), ...board[1].slice(0, 3), ...board[2].slice(0, 3)],
    [...board[0].slice(3, 6), ...board[1].slice(3, 6), ...board[2].slice(3, 6)],
    [...board[0].slice(6, 9), ...board[1].slice(6, 9), ...board[2].slice(6, 9)],
    [...board[3].slice(0, 3), ...board[4].slice(0, 3), ...board[5].slice(0, 3)],
    [...board[3].slice(3, 6), ...board[4].slice(3, 6), ...board[5].slice(3, 6)],
    [...board[3].slice(6, 9), ...board[4].slice(6, 9), ...board[5].slice(6, 9)],
    [...board[6].slice(0, 3), ...board[7].slice(0, 3), ...board[8].slice(0, 3)],
    [...board[6].slice(3, 6), ...board[7].slice(3, 6), ...board[8].slice(3, 6)],
    [...board[6].slice(6, 9), ...board[7].slice(6, 9), ...board[8].slice(6, 9)],
  ]

  const getBox = (x, y) => Math.floor(x / 3) * 3 + Math.floor(y / 3)

  const getColumns = (board) =>
    board.reduce(
      (state, current) => {
        current.forEach((element, index) => {
          state[index].push(element)
        })
        return state
      },
      [[], [], [], [], [], [], [], [], []]
    )
  let answers = board
  let precision = 1
  let r = 0
  while (answers.flat().includes(".")) {
    r++
    let pre = [...answers.flat()]
    round: for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      let tmp = [...answers[rowIndex]]
      let answer_for_columns = {}
      let answer_pools = []
      for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
        if (answers[rowIndex][columnIndex] === ".") {
          const possibleAnswers = numbers
            .filter((_) => !answers[rowIndex].includes(_))
            .filter((_) => !getColumns(answers)[columnIndex].includes(_))
            .filter(
              (_) =>
                !getBoxes(answers)[getBox(rowIndex, columnIndex)].includes(_)
            )
          if (possibleAnswers.length < 10) {
            console.log({
              //   answers,
              r,
              rowIndex,
              columnIndex,
              //   r: answers[rowIndex],
              //   c: getColumns(answers)[columnIndex],
              //   b: getBoxes(answers)[getBox(rowIndex, columnIndex)],
              a: possibleAnswers,
            })
            // return
          }
          answer_for_columns[columnIndex] = [...possibleAnswers]
          answer_pools.push(...possibleAnswers)
          if (possibleAnswers.length <= precision) {
            tmp[columnIndex] = possibleAnswers[0]
            if (precision !== 1) precision == 1
            answers[rowIndex] = tmp
            break round
          }
        }
      }
      for (const key in answer_for_columns) {
        if (Object.hasOwnProperty.call(answer_for_columns, key)) {
          const answer = answer_for_columns[key].find(
            (_) => answer_pools.indexOf(_) === answer_pools.lastIndexOf(_)
          )
          if (answer) {
            tmp[key] = answer
            answers[rowIndex] = tmp
            break round
          }
        }
      }
    }
    // if (JSON.stringify(pre) === JSON.stringify(answers.flat())) precision++
    if (JSON.stringify(pre) === JSON.stringify(answers.flat())) break
  }
  console.log(answers)
  return answers
}
/**
 * Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:
 */
const input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
const output = [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
]
const input2 = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
]
const output2 = [
  ["5", "1", "9", "7", "4", "8", "6", "3", "2"],
  ["7", "8", "3", "6", "5", "2", "4", "1", "9"],
  ["4", "2", "6", "1", "3", "9", "8", "7", "5"],
  ["3", "5", "7", "9", "8", "6", "2", "4", "1"],
  ["2", "6", "4", "3", "1", "7", "5", "9", "8"],
  ["1", "9", "8", "5", "2", "4", "3", "6", "7"],
  ["9", "7", "5", "8", "6", "3", "1", "2", "4"],
  ["8", "3", "2", "4", "9", "1", "7", "5", "6"],
  ["6", "4", "1", "2", "7", "5", "9", "8", "3"],
]
const b = [
  [".", ".", "9", "7", "4", "8", ".", ".", "2"],
  ["7", ".", ".", "6", ".", "2", ".", ".", "9"],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", "9", "8", "6", "2", "4", "1"],
  ["2", "6", "4", "3", "1", "7", "5", "9", "8"],
  ["1", "9", "8", "5", "2", "4", "3", "6", "7"],
  ["9", ".", ".", "8", "6", "3", ".", "2", "."],
  [".", ".", "2", "4", "9", "1", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
]
const a = [
  ["6", "5", "9", "7", "4", "8", "1", "5", "2"],
  ["7", "1", undefined, "6", "3", "2", "4", "8", "9"],
  ["4", "2", undefined, "1", "5", "9", "6", "7", "3"],
  ["3", "3", "7", "9", "8", "6", "2", "4", "1"],
  ["2", "6", "4", "3", "1", "7", "5", "9", "8"],
  ["1", "9", "8", "5", "2", "4", "3", "6", "7"],
  ["9", undefined, "1", "8", "6", "3", "7", "2", "4"],
  ["5", "7", "2", "4", "9", "1", "8", "3", "6"],
  ["8", "4", "3", "2", "7", "5", "9", "1", undefined],
]

const answers = solveSudoku(input2)

// console.log(JSON.stringify(answers) === JSON.stringify(output))

var isValidSudoku = function (board) {
  const boxes = [
    [...board[0].slice(0, 3), ...board[1].slice(0, 3), ...board[2].slice(0, 3)],
    [...board[0].slice(3, 6), ...board[1].slice(3, 6), ...board[2].slice(3, 6)],
    [...board[0].slice(6, 9), ...board[1].slice(6, 9), ...board[2].slice(6, 9)],
    [...board[3].slice(0, 3), ...board[4].slice(0, 3), ...board[5].slice(0, 3)],
    [...board[3].slice(3, 6), ...board[4].slice(3, 6), ...board[5].slice(3, 6)],
    [...board[3].slice(6, 9), ...board[4].slice(6, 9), ...board[5].slice(6, 9)],
    [...board[6].slice(0, 3), ...board[7].slice(0, 3), ...board[8].slice(0, 3)],
    [...board[6].slice(3, 6), ...board[7].slice(3, 6), ...board[8].slice(3, 6)],
    [...board[6].slice(6, 9), ...board[7].slice(6, 9), ...board[8].slice(6, 9)],
  ]

  const columns = board.reduce(
    (state, current) => {
      current.forEach((element, index) => {
        state[index].push(element)
      })
      return state
    },
    [[], [], [], [], [], [], [], [], []]
  )

  const valid = (array) => {
    return (
      new Set(array.filter((_) => _ !== ".")).size ===
      array.filter((_) => _ !== ".").length
    )
  }

  return (
    boxes.filter(valid).length === 9 &&
    board.filter(valid).length === 9 &&
    columns.filter(valid).length === 9
  )
}

console.log(isValidSudoku(answers))
