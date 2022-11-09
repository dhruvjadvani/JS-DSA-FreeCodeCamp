function repeatStringNumTimes(str, num) {
  let newStr = '';
  for(let i = 0; i < num; i++) {
    newStr += str;
  }
  // console.log(newStr)
  return newStr
}

repeatStringNumTimes("abc", 3);
