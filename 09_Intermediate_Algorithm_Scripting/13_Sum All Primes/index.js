function sumPrimes(num) {
  function isPrime(num) {
    for(let div = 2; div * div <= num; div++) {
      if(num % div === 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;
  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum = sum + i;
    }
  }

  return sum;

}

sumPrimes(10);
