import {
  findMaxConsecutiveOnes,
  findNumbers,
  duplicateZeros,
  merge,
  removeElement,
  removeDuplicates,
  checkIfExist,
  validMountainArray,
  replaceElements,
  moveZeroes,
  sortArrayByParity,
  sortedSquares,
  heightChecker,
  thirdMax,
  findDisappearedNumbers,
} from './index'

describe('findMaxConsecutiveOnes', () => {
  const findMaxConsecutiveOnesTestCase = [
    { array: [1, 1, 0, 0], result: 2 },
    { array: [1, 1, 0, 1, 1, 1], result: 3 },
  ]
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

describe('sortedSquares', () => {
  const sortedSquaresTestCase = [
    {
      array: [-4, -1, 0, 3, 10],
      result: [0, 1, 9, 16, 100],
    },
    {
      array: [-7, -3, 2, 3, 11],
      result: [4, 9, 9, 49, 121],
    },
  ]
  sortedSquaresTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`sortedSquares array:[${array}] result:${result}`, () => {
      expect(sortedSquares(array)).toStrictEqual(result)
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

describe('checkIfExist', () => {
  const checkIfExistTestCase = [
    {
      nums: [10, 2, 5, 3],
      result: true,
    },
    {
      nums: [7, 1, 14, 11],
      result: true,
    },
    {
      nums: [3, 1, 7, 11],
      result: false,
    },
  ]
  checkIfExistTestCase.forEach((testCase) => {
    const { nums, result } = testCase

    test(`checkIfExist nums:[${nums}] result:${result}`, () => {
      expect(checkIfExist(nums)).toBe(result)
    })
  })
})

describe('validMountainArray', () => {
  const validMountainArrayTestCase = [
    {
      nums: [2, 1],
      result: false,
    },
    {
      nums: [3, 5, 5],
      result: false,
    },
    {
      nums: [0, 3, 2, 1],
      result: true,
    },
  ]
  validMountainArrayTestCase.forEach((testCase) => {
    const { nums, result } = testCase

    test(`validMountainArray nums:[${nums}] result:${result}`, () => {
      expect(validMountainArray(nums)).toBe(result)
    })
  })
})

describe('replaceElements', () => {
  const replaceElementsTestCase = [
    {
      array: [17, 18, 5, 4, 6, 1],
      result: [18, 6, 6, 6, 1, -1],
    },
  ]
  replaceElementsTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`replaceElements array:[${array}] result:${result}`, () => {
      expect(replaceElements(array)).toStrictEqual(result)
    })
  })
})

describe('moveZeroes', () => {
  const moveZeroesTestCase = [
    {
      array: [0, 1, 0, 3, 12],
      result: [1, 3, 12, 0, 0],
    },
  ]
  moveZeroesTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`moveZeroes array:[${array}] result:${result}`, () => {
      moveZeroes(array)
      expect(array).toStrictEqual(result)
    })
  })
})

describe('sortArrayByParity', () => {
  const sortArrayByParityTestCase = [
    {
      array: [3, 1, 2, 4],
      result: [2, 4, 3, 1], // The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
    },
  ]
  sortArrayByParityTestCase.forEach((testCase) => {
    const { array, result } = testCase

    const compareString = (a, b) => JSON.stringify(a) === JSON.stringify(b)
    test(`sortArrayByParity array:[${array}] result:${result}`, () => {
      expect(
        compareString(sortArrayByParity(array), [2, 4, 3, 1]) ||
          compareString(sortArrayByParity(array), [4, 2, 3, 1]) ||
          compareString(sortArrayByParity(array), [2, 4, 1, 3]) ||
          compareString(sortArrayByParity(array), [4, 2, 1, 3])
      ).toBeTruthy()
    })
  })
})

describe('heightChecker', () => {
  const heightCheckerTestCase = [
    {
      array: [1, 1, 4, 2, 1, 3],
      result: 3,
    },
  ]
  heightCheckerTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`heightChecker array:[${array}] result:${result}`, () => {
      expect(heightChecker(array)).toBe(result)
    })
  })
})

describe('thirdMax', () => {
  const thirdMaxTestCase = [
    {
      array: [3, 2, 1],
      result: 1,
    },
    {
      array: [2, 2, 3, 1],
      result: 1,
    },
  ]
  thirdMaxTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`thirdMax array:[${array}] result:${result}`, () => {
      expect(thirdMax(array)).toBe(result)
    })
  })
})

describe('findDisappearedNumbers', () => {
  const findDisappearedNumbersTestCase = [
    {
      array: [4, 3, 2, 7, 8, 2, 3, 1],
      result: [5, 6],
    },
  ]
  findDisappearedNumbersTestCase.forEach((testCase) => {
    const { array, result } = testCase

    test(`findDisappearedNumbers array:[${array}] result:${result}`, () => {
      expect(findDisappearedNumbers(array)).toStrictEqual(result)
    })
  })
})
