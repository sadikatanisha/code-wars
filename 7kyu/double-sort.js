function dbSort(a) {
  let numbers = a.filter((el) => typeof el === "number").sort((a, b) => a - b);
  let strings = a
    .filter((el) => typeof el === "string")
    .sort((a, b) => a.localeCompare(b));
  return numbers.concat(strings);
}

console.log(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
console.log(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
console.log(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [
  0,
  2,
  2,
  "Apple",
  "Banana",
  "Mango",
  "Orange",
]);
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]), [
  0,
  1,
  2,
  "C",
  "W",
  "W",
  "W",
]);
console.log(
  dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]),
  [46, 78, 574, "287", "3", "423", "69", "Apple", "Grape", "Peach"]
);

const dbSort = (arr) =>
  [...arr.filter((el) => typeof el === "number").sort((a, b) => a - b)].concat([
    ...arr.filter((el) => typeof el === "string").sort(),
  ]);
