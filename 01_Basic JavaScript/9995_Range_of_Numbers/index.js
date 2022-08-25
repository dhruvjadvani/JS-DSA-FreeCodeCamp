function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
    return [];
  }
  const rng = rangeOfNumbers(startNum, endNum - 1);
  rng.push(endNum);
  return rng;
};

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
