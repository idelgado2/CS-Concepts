function binary_search(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary_search(arr, 5));
console.log(binary_search(arr, 15));
console.log(binary_search(arr, 2));
