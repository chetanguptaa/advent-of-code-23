const fs = require("fs");

const data = fs.readFileSync("../input.txt", "utf-8");
const arr = data.replace("\t", " ").split("\r\n");
let ans = 0;

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
