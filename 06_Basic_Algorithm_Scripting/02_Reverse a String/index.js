function reverseString(str) {
  let newStr = "";
  for(let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i]; 
  }
  // console.log(newStr)
  return newStr;
}

reverseString("hello");
