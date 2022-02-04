/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false

  const replace = {}
  const replaced = new Set()

  for (let index = 0; index < s.length; index++) {
    if (!replace[s[index]] && !replaced.has(t[index])) {
      replace[s[index]] = t[index]
      replaced.add(t[index])
    }
  }

  return (
    s
      .split("")
      .map((_) => replace[_])
      .join("") === t
  )
}

isIsomorphic("badc", "baba")
