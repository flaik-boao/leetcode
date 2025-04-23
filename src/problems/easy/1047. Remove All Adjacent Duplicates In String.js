/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const fn = (string) => {
    let current
    let array = string.split("")
    let result = array.reduce((tmp, c) => {
      console.log({ tmp, c })
      if (c === current) {
        current = void 0
        return tmp.slice(0, -1)
      } else {
        current = c
        return [...tmp, c]
      }
    }, [])

    if (result.length !== array.length) {
      return fn(array.join(""))
    }
    return array.join("")
  }
  return fn(s)
}

console.log(removeDuplicates("aaaaaaaa"))

// var removeDuplicates = function (s) {
//   const fn = (string) => {
//     let removeIndex = -1
//     let array = string.split("")
//     for (let i = 0; i < array.length - 1; i++) {
//       if (array[i] === array[i + 1]) {
//         removeIndex = i
//         break
//       }
//     }
//     if (removeIndex >= 0) {
//       array.splice(removeIndex, 2)
//       return fn(array.join(""))
//     }
//     return array.join("")
//   }
//   return fn(s)
// }
