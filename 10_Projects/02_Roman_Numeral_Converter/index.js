function convertToRoman(num) {
  var romanNumeral = "";
  
  var romanValues = [
    { arabic: 1000, roman: "M" },
    { arabic: 900, roman: "CM" },
    { arabic: 500, roman: "D" },
    { arabic: 400, roman: "CD" },
    { arabic: 100, roman: "C" },
    { arabic: 90, roman: "XC" },
    { arabic: 50, roman: "L" },
    { arabic: 40, roman: "XL" },
    { arabic: 10, roman: "X" },
    { arabic: 9, roman: "IX" },
    { arabic: 5, roman: "V" },
    { arabic: 4, roman: "IV" },
    { arabic: 1, roman: "I" }
  ];

  for (var i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i].arabic) {
      romanNumeral += romanValues[i].roman;
      num -= romanValues[i].arabic;
    }
  }
  
  return romanNumeral;
}

console.log(convertToRoman(36)); // Output: XXXVI
