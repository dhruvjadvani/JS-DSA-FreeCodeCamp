function checkPositive(arr) {
  // Only change code below this line
  const res = arr.every(function(val) {
    return val > 0;
  })
  
  return res;
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
