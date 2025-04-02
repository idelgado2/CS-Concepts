// O(n)
function linearSerach(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(linearSerach(array, 4));
console.log(linearSerach(array, 0));
