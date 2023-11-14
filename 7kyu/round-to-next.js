// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(14));
