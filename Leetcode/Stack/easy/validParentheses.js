// time complexity: O(n^2)
// function isValid(s) {
//   while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
//     //O(n)
//     s = s.replace("()", ""); //O(n)
//     s = s.replace("{}", ""); //O(n)
//     s = s.replace("[]", ""); //O(n)
//   }
//   if (s === "") {
//     return true;
//   } else {
//     return false;
//   }
// }

// time complexity: O(n)
function isValid(s) {
  const stack = [];
  const closeingValues = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (closeingValues[char]) {
      //we have a closing bracket
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === closeingValues[char]
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      // else we have an open bracket
      stack.push(char);
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
