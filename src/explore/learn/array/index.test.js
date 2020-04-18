import { findMaxConsecutiveOnes } from './index'

test('testcase [1, 1, 0, 0]', () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 0])).toBe(2)
})
