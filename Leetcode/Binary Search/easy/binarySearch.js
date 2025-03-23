// time complexity: O(log n)
// space complexity: O(1)
var search = function (nums, target) {
  let larry = 0;
  let richard = nums.length - 1;

  while (larry <= richard) {
    let middle = Math.floor((richard - larry) / 2) + larry;
    if (target > nums[middle]) {
      larry = middle + 1;
    } else if (target < nums[middle]) {
      richard = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

// Test Case 1
let array = [-1, 0, 3, 5, 9, 12];
let target = 9;
let result = search(array, target);
if (result !== -1) {
  console.log("Index of Target Value is: ", result);
} else {
  console.log("Target Value not found");
}

// Test Case 2
let array2 = [-1, 0, 3, 5, 9, 12];
let target2 = 2;
let result2 = search(array2, target2);
if (result2 !== -1) {
  console.log("Index of Target Value is: ", result2);
} else {
  console.log("Target Value not found");
}
