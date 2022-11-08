function findLongestWordLength(str) {
  let arr = str.split(" ");
  // console.log(arr)
  let len = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= len) {
      len = arr[i].length;
    }
  }
  // console.log(len)
  return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
