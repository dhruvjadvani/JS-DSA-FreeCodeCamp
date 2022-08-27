function convertToRoman(num) {
 let obj = {
    M:  1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1
 }

let romanNum = [];
 if(num >= 10 && num < 40) {
   if(num === 10) {
     romanNum.push(num);
   }
   let lastDigit = num % 10;
   romanNum.push(obj[lastDigit]);

   let firstDigit = num / 10;
   romanNum.unshift(obj[firstDigit]);
 } else if()

}

convertToRoman(36);
