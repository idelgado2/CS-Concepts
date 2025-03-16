class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    // Brute force O(n^2)
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] === nums[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // Optimized O(nlogn)
    // nums.sort((a, b) => a - b);
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === nums[i - 1]){
    //         return true;
    //     }
    // }
    // return false;

    // Optimized Further O(n) using Set
    // let seenSet = new Set();
    // for(let num of nums){
    //     if(seenSet.has(num)){
    //         return true;
    //     }
    //     seenSet.add(num)
    // }
    // return false;

    // Optimized Further O(n) using Map
    // const seenMap = new Map();
    // for(let num of nums){
    //     if(seenMap.has(num)){
    //         return true;
    //     }
    //     seenMap.set(num, true);  // the kay can be anything here - dosen't matter
    // }
    // return false;

    // Optimized Further O(n) using hash Object
    let hash = {};
    for (let num of nums) {
      if (hash[num] !== undefined) {
        return true;
      }
      hash[num] = true;
    }
    return false;
  }
}
