function pairElement(str) {

  const paired = [];
  for (let i = 0; i < str.length; i++) {
    
    if(str[i] === 'A') {
      paired.push(["A", "T"]);
    } else if(str[i] === 'T') {
      paired.push(["T", "A"]);
    } else if(str[i] === 'C') {
      paired.push(["C", "G"]);
    } else if(str[i] === 'G') {
      paired.push(["G", "C"]);
    }
    
  }

  return paired;
}


pairElement("GCG");
