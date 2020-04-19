import { findMaxConsecutiveOnes, findNumbers, duplicateZeros } from './index'

describe('findMaxConsecutiveOnes', () => {
  const findMaxConsecutiveOnesTestCase = [{ array: [1, 1, 0, 0], result: 2 }]
  findMaxConsecutiveOnesTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`[${array}]`, () => {
      expect(findMaxConsecutiveOnes(array)).toBe(result)
    })
  })
})

describe('findNumbers', () => {
  const findNumbersTestCase = [
    { array: [12, 345, 2, 6, 7896], result: 2 },
    { array: [555, 901, 482, 1771], result: 1 },
  ]
  findNumbersTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`[${array}]`, () => {
      expect(findNumbers(array)).toBe(result)
    })
  })
})

describe('duplicateZero', () => {
  const duplicateZeroTestCase = [
    {
      array: [1, 0, 2, 3, 0, 4, 5, 0],
      result: [1, 0, 0, 2, 3, 0, 0, 4],
    },
    {
      array: [0, 1, 7, 6, 0, 2, 0, 7],
      result: [0, 0, 1, 7, 6, 0, 0, 2],
    },
  ]
  duplicateZeroTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`duplicateZero [${array}]`, () => {
      duplicateZeros(array)
      expect(array).toStrictEqual(result)
    })
  })
})
