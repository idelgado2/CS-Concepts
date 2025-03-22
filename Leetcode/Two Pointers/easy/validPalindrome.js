function isAlphanumeric(char) {
  if (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= "0" && char <= "9")
  ) {
    return true;
  } else {
    return false;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
// function isPalindrome(s) {
//   let newString = "";
//   for (let char of s) {
//     if (isAlphanumeric(char)) {
//       newString += char.toLowerCase();
//     }
//   }

//   if (newString === newString.split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

//  If you want space complezity to be O(1) then you can use two pointers approach
function isPalindrome(s) {
  let larry = 0;
  let richard = s.length - 1;

  while (larry < richard) {
    //  keep traversing the two pointers until they are adjacent
    while (larry < richard && !isAlphanumeric(s[larry])) {
      // skip over any non alphanumeric
      larry++;
    }
    while (richard > larry && !isAlphanumeric(s[richard])) {
      // skip over any non alphanumeric
      richard--;
    }

    //test equivalence
    if (s[larry].toLowerCase() !== s[richard].toLocaleLowerCase()) {
      return false;
    }
    larry++;
    richard--;
  }
  return true;
}
console.log(isPalindrome("Was it a car or a cat I saw?"));
