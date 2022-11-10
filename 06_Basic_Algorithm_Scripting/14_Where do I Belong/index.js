function getIndexToIns(arr, num) {
  // console.log(arr);
  arr.push(num);

  // console.log(arr);
  arr.sort((a, b) => a - b);

  // console.log(arr);
  let idx = arr.indexOf(num);

  // console.log(idx);
  return idx;
}

getIndexToIns([40, 60], 50);
