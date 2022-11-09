function truncateString(str, num) {
  // let newStr = '';
  // for(let i = 0; i < num; i++) {
  //   newStr += str[i];
  // }
  // console.log(newStr +"...")
  // return newStr + "...";

  if(str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
