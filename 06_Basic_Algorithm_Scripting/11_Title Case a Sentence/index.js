function titleCase(str) {
  let newStr = '';
  newStr = str.toLowerCase();

  // console.log(newStr)

  let arr = newStr.split(" ");
  // console.log(arr);

  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  newArr = newArr.toString()
  newArr = newArr.replace(/,/g, " ");

  // console.log(newArr);
  return newArr;
}

titleCase("I'm a little tea pot");
