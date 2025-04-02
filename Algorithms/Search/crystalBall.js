function crystalBallBreaksAt(breaks) {
  let jumpRate = Math.floor(Math.sqrt(breaks.length));
  let i = jumpRate;
  while (i < breaks.length) {
    if (breaks[i] === 1) {
      break;
    }
    i += jumpRate;
  }

  i -= jumpRate;
  let j = 0;
  while (j <= jumpRate && i < breaks.length) {
    if (breaks[i] === 1) {
      return i;
    }
    j++;
    i++;
  }
  return -1;
}

console.log(crystalBallBreaksAt([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]));
console.log(crystalBallBreaksAt([0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(crystalBallBreaksAt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1]));
console.log(crystalBallBreaksAt([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

// while crystalBall1 does not breaks
//     drop ball at breaks[currentPosition + jumpRate]
//     if crystal ball breaks
//         go back by the jump rate
//         while crystalBall2 does not break
//             drop ball at breaks[newPosition]
//             if breaks
//                 return newPosition
// return -1
