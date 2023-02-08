const arr = [1, 2, 3, [4, 5, [6, 7], 8], [10, 11, [12, 13]], 9];

function* flatten(arr, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      yield flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}
console.log(flatten(arr, 1));
