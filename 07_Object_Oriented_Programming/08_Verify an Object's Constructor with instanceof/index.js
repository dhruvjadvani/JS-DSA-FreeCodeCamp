function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(2);

let res = myHouse instanceof House;
console.log(res);
