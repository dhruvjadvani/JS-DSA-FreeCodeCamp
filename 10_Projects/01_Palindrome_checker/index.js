function palindrome(str) {
  let revStr = "";

  str = str.toLowerCase();
  str = str.replace(/[\W_]/g,"");
  
  for(let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str.charAt(i);
  }

  if(str === revStr) {
    return true;
  } else {
    return false;
  }


}

palindrome("eye");
