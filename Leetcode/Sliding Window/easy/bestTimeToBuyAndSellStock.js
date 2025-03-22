// time complexity: O(n^2)
// space complexity: O(1)
// function maxProfit(prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     let buy = prices[i];
//     for (let j = i + 1; j < prices.length; j++) {
//       let sell = prices[j];
//       profit = Math.max(profit, sell - buy);
//     }
//   }
//   return profit;
// }

// time complexity: O(n)
function maxProfit(prices) {
  // set up out pointers
  let buyingPointer = 0;
  let sellingPointer = 0;
  let profit = 0;

  while (sellingPointer < prices.length) {
    if (prices[buyingPointer] < prices[sellingPointer]) {
      //lets compare with our profit
      profit = Math.max(profit, prices[sellingPointer] - prices[buyingPointer]);
    } else {
      // if we found another day that has a lower prices point to start at
      buyingPointer = sellingPointer;
    }
    sellingPointer++;
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
