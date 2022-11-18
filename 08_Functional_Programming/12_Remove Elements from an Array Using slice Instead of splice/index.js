function nonMutatingSplice(cities) {
  // Only change code below this line
  let res = cities.slice(0, 3);
  // for(let i = 0; i < 3; i++) {
  //   res.push(cities[i]);
  // }
  console.log(res);
  return res;

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
