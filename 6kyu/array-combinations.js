// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
//Parameter: array
//Return: int
//Example:
//Psuedocode: 1. Use set to find uniques values
function solve(arr) {
  return arr.map((el) => [...new Set(el)].length).reduce((a, b) => a * b, 1);
}

console.log(solve([[1, 2], [4], [5, 6]]), 4);
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ]),
  4
);
console.log(
  solve([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  8
);
console.log(
  solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6],
  ]),
  72
);

function solve(arr) {
  return arr.reduce((res, curr) => (res *= new Set(curr).size), 1);
}
