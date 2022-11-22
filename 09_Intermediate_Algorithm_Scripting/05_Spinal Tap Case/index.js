function spinalCase(str) {
  
  const arr = str.split(/\s|_|(?=[A-Z])/);

  const strOne = arr.join("-");
 
  const res = strOne.toLowerCase();
  
  return res;
}

spinalCase('This Is Spinal Tap');
