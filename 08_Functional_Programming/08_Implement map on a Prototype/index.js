// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);

// const newArray = [];
// for(let i = 0; i < s.length; i++) {
//   newArray.push(s[i] * 2);
// }

// console.log(newArray);
// const new_s = [...newArray];
