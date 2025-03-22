// time complexity: O(log n)
// space complexity: O(1)
function search(nums, target) {
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
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([5], 5)); // 0
