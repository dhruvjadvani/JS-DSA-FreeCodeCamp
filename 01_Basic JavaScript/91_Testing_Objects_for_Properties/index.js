function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj[checkProp] == undefined) {
    return 'Not Found';
  } else {
    return obj[checkProp];
  }
  // Only change code above this line
}

checkObj.hasOwnProperty({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
checkObj.hasOwnProperty({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet");
checkObj.hasOwnProperty({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");
checkObj.hasOwnProperty({city: "Seattle"}, "city");
checkObj.hasOwnProperty({city: "Seattle"}, "district");
checkObj.hasOwnProperty({pet: "kitten", bed: "sleigh"}, "gift");


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties
