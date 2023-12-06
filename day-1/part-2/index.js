const fs = require("fs");

const data = fs.readFileSync("../input.txt", "utf-8");
const arr = data.replace("\t", " ").split("\r\n");
let ans = 0;

for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let newStr = "";
  for (let j = 0; j < str.length; j++) {
    newStr += str[j];
    if (newStr.indexOf("one") != -1) newStr = newStr.replace("one", 1);
    if (newStr.indexOf("two") != -1) newStr = newStr.replace("two", 2);
    if (newStr.indexOf("three") != -1) newStr = newStr.replace("three", 3);
    if (newStr.indexOf("four") != -1) newStr = newStr.replace("four", 4);
    if (newStr.indexOf("five") != -1) newStr = newStr.replace("five", 5);
    if (newStr.indexOf("six") != -1) newStr = newStr.replace("six", 6);
    if (newStr.indexOf("seven") != -1) newStr = newStr.replace("seven", 7);
    if (newStr.indexOf("eight") != -1) newStr = newStr.replace("eight", 8);
    if (newStr.indexOf("nine") != -1) newStr = newStr.replace("nine", 9);
  }
  arr[i] = newStr;
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].replace(/\D/g, "");
}

for (let i = 0; i < arr.length; i++) {
  let num = parseInt(arr[i]);
  if (num < 10) {
    num += num * 10;
    ans += num;
  } else if (num >= 100) {
    let newStr = "";
    newStr += arr[i][0];
    newStr += arr[i][arr[i].length - 1];
    ans += parseInt(newStr);
  } else {
    ans += num;
  }
}

console.log(ans);
