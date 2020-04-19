import {
  findMaxConsecutiveOnes,
  findNumbers,
  duplicateZeros,
  merge,
  removeElement,
  removeDuplicates,
} from './index'

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

describe('merge', () => {
  const mergeTestCase = [
    {
      args: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
      result: [1, 2, 2, 3, 5, 6],
    },
  ]
  mergeTestCase.forEach((testCase) => {
    const {
      args: { nums1, m, nums2, n },
      result,
    } = testCase

    test(`merge nums1:[${nums1}] m:${m} nums2:[${nums2}] n:${n}`, () => {
      merge(nums1, m, nums2, n)
      expect(nums1).toStrictEqual(result)
    })
  })
})

describe('removeElement', () => {
  const removeElementTestCase = [
    {
      args: { nums: [3, 2, 2, 3], val: 3 },
      result: 2,
    },
    {
      args: { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 },
      result: 5,
    },
  ]
  removeElementTestCase.forEach((testCase) => {
    const {
      args: { nums, val },
      result,
    } = testCase

    test(`removeElement nums:[${nums}] val:${val}`, () => {
      expect(removeElement(nums, val)).toBe(result)
    })
  })
})

describe('removeDuplicates', () => {
  const removeDuplicatesTestCase = [
    {
      nums: [1, 1, 2],
      result: 2,
    },
    {
      nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      result: 5,
    },
  ]
  removeDuplicatesTestCase.forEach((testCase) => {
    const { nums, result } = testCase

    test(`removeDuplicates nums:[${nums}] result:${result}`, () => {
      expect(removeDuplicates(nums)).toBe(result)
    })
  })
})
