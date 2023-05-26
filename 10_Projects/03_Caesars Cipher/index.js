function rot13(str) {
  let decodedMessage = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[A-Z]/.test(char)) {
      let decodedChar = String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65);
      decodedMessage += decodedChar;
    } else {
      decodedMessage += char;
    }
  }

  return decodedMessage;
}

console.log(rot13("SERR PBQR PNZC")); 

