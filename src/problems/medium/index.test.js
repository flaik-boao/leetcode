import { lengthOfLongestSubstring } from "./index";

describe("lengthOfLongestSubstring", () => {
  const lengthOfLongestSubstringTestCase = [{ input: "abcabcbb", result: 3 }];
  lengthOfLongestSubstringTestCase.forEach((testCase) => {
    const { input, result } = testCase;

    test(`${input}`, () => {
      expect(lengthOfLongestSubstring(input)).toBe(result);
    });
  });
});
