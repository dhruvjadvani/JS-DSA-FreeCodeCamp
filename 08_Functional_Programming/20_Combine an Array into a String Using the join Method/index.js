function sentensify(str) {
  // Only change code below this line

  const res = str.split(/\W/);
  console.log(res);
  const newStr = res.join(" ");
  console.log(newStr);
  return newStr;
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
