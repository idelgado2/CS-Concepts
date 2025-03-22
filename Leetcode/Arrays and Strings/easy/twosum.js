/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Brute force solution O(N^2)
  // for(let i = 0; i < nums.length; i++){
  //     for(let j = i + 1; j < nums.length; j++){
  //         if(nums[i] + nums[j] == target){
  //             return [i, j];
  //         }
  //     }
  // }

  // O(N) solution using ES^ data strucutre Map
  // let map = new Map();
  // for(let i = 0; i < nums.length; i++){
  //     let complement = target - nums[i];
  //     if(map.has(complement)){
  //         return [map.get(complement), i];
  //     }
  //     map.set(nums[i], i);
  // }
  // return [];

  // O(N) solution object
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash[complement] !== undefined) {
      return [hash[complement], i];
    }
    hash[nums[i]] = i;
  }
};
