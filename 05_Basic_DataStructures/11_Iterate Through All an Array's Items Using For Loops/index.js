function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    for(let j = 0; j < arr[0].length; j++) {
      
      if(arr[i][j] === elem) {
         count++;
      }

    }
    if(count == 0) {
        newArr.push(arr[i])
      }
  } 
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
