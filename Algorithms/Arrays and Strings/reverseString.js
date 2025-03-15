// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

/* --------------------------------- Example -------------------------------- */
//  Input: s = ["h","e","l","l","o"]
//  Output: ["o","l","l","e","h"]
/* -------------------------------------------------------------------------- */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //return s.reverse();   // this works as well, but its a bit slower

    let larry = 0;
    let richard = s.length - 1;
    while(larry < richard){
        let temp = s[larry];
        s[larry] = s[richard];
        s[richard] = temp;
        larry++;
        richard--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));
