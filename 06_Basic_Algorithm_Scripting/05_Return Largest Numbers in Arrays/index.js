function largestOfFour(arr) {
  let newArr = [];
  

  for(let i = 0; i < arr.length; i++) {
    let bi = -Infinity;
    for(let j = 0; j < arr[0].length; j++) {
      if(bi < arr[i][j]) {
        bi = arr[i][j]
      }
    }
    newArr.push(bi);
  }

  // console.log(newArr);
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
