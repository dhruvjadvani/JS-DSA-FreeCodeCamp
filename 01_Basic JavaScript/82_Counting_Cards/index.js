let count = 0;
let high = [2, 3, 4, 5, 6];
let low = [10, 'J', 'Q', 'K', 'A'];
function cc(card) {
  // Only change code below this line
  for(let i = 0; i < high.length; i++) {
    if(high[i] == card) {
        count++;
    }
  }

  for(let i = 0; i < low.length; i++) {
    if(low[i] == card) {
        count--;
    }
  }

  if(count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
