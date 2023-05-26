function telephoneCheck(str) {
  // Regular expression pattern to match the valid US phone number formats
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
  
  // Test the input string against the regex pattern
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("(555) 555-5555")); // true


