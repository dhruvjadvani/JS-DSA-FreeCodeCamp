function nonMutatingPush(original, newItem) {
  // Only change code below this line
  const res = original.concat(newItem);
  return res;

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
