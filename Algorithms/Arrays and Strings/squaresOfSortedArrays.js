// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/* --------------------------------- Example -------------------------------- */
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
/* -------------------------------------------------------------------------- */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //  Inuitive solution with O(N log N) - can we do better!?
    // let squaredNums = nums.map(x => x * x); // O(N)
    // let sortedNums = squaredNums.sort((a, b) => a - b); //  O(N Log N)
    // return sortedNums;

    // Total time complexity for this is O(N)
    let larry = 0;
    let richard = nums.length - 1;
    let sortedSquares = [];
    while(l <= r){  // O(N)
        if(Math.abs(nums[larry]) <= Math.abs(nums[richard])){
            sortedSquares.push(nums[richard] * nums[richard]);
            r--;
        }else{
            sortedSquares.push(nums[larry] * nums[larry]);
            l++;
        }
    }
    return sortedSquares.reverse(); // O(N)
    
};

console.log(sortedSquares([-4,-1,0,3,10]));
