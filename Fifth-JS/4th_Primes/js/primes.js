var getPrimeFactors = function (n) {
    "use strict";
  /*
    function isPrime(n) {
      var i;
  
      for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    var i,
    sequence = [];

  // Check which numbers are factors of n and also check if that number is prime.
  for (i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      sequence.push(i);
    }
  }

  return sequence;
  */
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  }

  var i,
    sequence = [];

  // Check which numbers are factors of n and also check if that number is prime.
  for (i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      sequence.push(i);
    }
  }

  return sequence;
};