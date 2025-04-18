function sum(num) {
  if (num === 0) {
    return 0;
  }
  let temp = num + sum(num - 1);
  console.log(temp);
  return temp;
}

sum(5);
