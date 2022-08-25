// Only change code below this line
function countdown(n){
  if(n < 1) {
    return []; 
  }

  const countArray = countdown(n - 1);
  countArray.unshift(n);
  return countArray;
}
// Only change code above this line
countdown(5);


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
