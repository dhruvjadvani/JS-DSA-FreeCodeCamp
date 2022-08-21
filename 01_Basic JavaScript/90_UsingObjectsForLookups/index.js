// Setup
function phoneticLookup(val) {
  let result = "";

  let obj = {
    "alpha": "Adams", 
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
     
  result = obj[val];


  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
