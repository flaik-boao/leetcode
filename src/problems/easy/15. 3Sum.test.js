import { threeSum } from "./15. 3Sum";

describe("threeSum", () => {
  test(`[-1, 0, 1, 2, -1, -4]`, () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, 0, 1], [-1, -1, 2]]);
  });
});
