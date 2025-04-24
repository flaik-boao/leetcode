export function powerOfFour(n) {
    function helper(x) {
        if (x === 1) return true
        if (x / 4 >= 4) {
            return helper(x / 4)
        } else if (x / 4 === 1) {
            return true

        } else return false;
    }
    return helper(n)
}

console.log(powerOfFour(16))