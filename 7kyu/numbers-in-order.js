function inAscOrder(arr) {
  return arr.map((el, i, a) => (el > arr[i + 1] ? 0 : 1)).includes(0)
    ? false
    : true;
}

console.log(
  inAscOrder([1, 2, 4, 7, 19]),
  true,
  'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
);
console.log(
  inAscOrder([1, 2, 3, 4, 5]),
  true,
  'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
);
console.log(
  inAscOrder([1, 6, 10, 18, 2, 4, 20]),
  false,
  'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
);
console.log(
  inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
  false,
  'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
);
