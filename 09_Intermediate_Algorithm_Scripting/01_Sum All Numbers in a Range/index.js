function sumAll(arr) {
  const newArr = arr.sort(function(a,b) {
    return a - b;
  });

  let sum = 0;
  
  for(let i = newArr[0]; i <= newArr[1]; i++) {
    sum = sum + i;
  }

  console.log(sum);
  return sum;
 
}

sumAll([1, 4]);
