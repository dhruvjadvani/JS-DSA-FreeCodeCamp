function uniteUnique(arr) {
  const finalArray = [];

    for (let i = 0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];

    
        for (let j = 0; j < arrayArguments.length; j++) {
          let indexValue = arrayArguments[j];

          if (finalArray.indexOf(indexValue) < 0) {
            finalArray.push(indexValue);
          }
          
        }
    }
  
  console.log(finalArray);
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
