// function confirmEnding(str, target) {
//   if(str.endsWith(target) === true) {
//     return true;
//   }
//   return false;
// }

// confirmEnding("Bastian", "n");


function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");

  return re.test(str);

}

confirmEnding("Bastian", "n");
