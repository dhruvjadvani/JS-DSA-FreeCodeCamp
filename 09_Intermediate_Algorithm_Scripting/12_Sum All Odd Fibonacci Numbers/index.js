function sumFibs(num) {
  let a = 0;
  let b = 1;
  
  let c = a + b;
  let sum = 0;
  
  while (c <= num) {
    
    if (c % 2 === 1) {
      sum = sum + c;
    }

    c = a + b;
    a = b;
    b = c;
  }


  return sum;
}

sumFibs(4);
