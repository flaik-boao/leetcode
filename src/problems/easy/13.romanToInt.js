/**
 * @param {string} s
 * @return {number}
 */
export var romanToInt = function (s) {
  if (s.startsWith("IV")) {
    return getNumber(s.slice(2)) + 4;
  } else if (s.startsWith("IX")) {
    return getNumber(s.slice(2)) + 9;
  } else if (s.startsWith("XL")) {
    return getNumber(s.slice(2)) + 40;
  } else if (s.startsWith("XC")) {
    return getNumber(s.slice(2)) + 90;
  } else if (s.startsWith("CD")) {
    return getNumber(s.slice(2)) + 400;
  } else if (s.startsWith("CM")) {
    return getNumber(s.slice(2)) + 900;
  } else if (s.startsWith("I")) {
    return getNumber(s.slice(1)) + 1;
  } else if (s.startsWith("V")) {
    return getNumber(s.slice(1)) + 5;
  } else if (s.startsWith("X")) {
    return getNumber(s.slice(1)) + 10;
  } else if (s.startsWith("L")) {
    return getNumber(s.slice(1)) + 50;
  } else if (s.startsWith("C")) {
    return getNumber(s.slice(1)) + 100;
  } else if (s.startsWith("D")) {
    return getNumber(s.slice(1)) + 500;
  } else if (s.startsWith("M")) {
    return getNumber(s.slice(1)) + 1000;
  } else {
    return 0;
  }
};
