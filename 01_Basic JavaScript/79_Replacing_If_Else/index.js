function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
      answer = "There is no #1";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case "bob":
      answer = "Marley";
      break;
    default:
      answer = "";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch
