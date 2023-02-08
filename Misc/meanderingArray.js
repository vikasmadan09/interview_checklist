let unsorted = [1, 5, 8, 7, 6, -1, -5, 4, 9, 5];

function meanderingArr(unsorted) {
  let n = unsorted.length;
  unsorted.sort((a, b) => a - b);
  let tempArr = new Array(n);
  let start = 0,
    end = n - 1;
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (flag) {
      tempArr[i] = unsorted[end];
      end--;
    } else {
      tempArr[i] = unsorted[start];
      start++;
    }
  }
  return tempArr;
}
console.log(meanderingArr(unsorted));
