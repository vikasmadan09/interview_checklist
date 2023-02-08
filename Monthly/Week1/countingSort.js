function countingSort(arr) {
  let countedArr = new Array(Math.max(...arr) + 1).fill(0);
  let accumulatedArr = [0];
  let accumulator = 0;
  let sortedArr = new Array(arr.length).fill(0);

  for (let i of arr) {
    countedArr[i]++;
  }
  for (let i = 0; i < countedArr.length - 1; i++) {
    accumulator += countedArr[i];
    accumulatedArr.push(accumulator);
  }
  for (let i = 0; i < arr.length; i++) {
    let index = accumulatedArr[arr[i]];
    sortedArr[index] = arr[i];
    accumulatedArr[arr[i]]++;
  }
  console.log(sortedArr);
  return sortedArr;
}

console.log(countingSort([5, 1, 4, 4, 3, 2]));
