import fs from "fs";

const data = fs.readFileSync("./input.txt", "utf-8");
const arr = data.split("\r\n");

let ans = 0;

for (let i = 0; i < arr.length; i++) {
  const [card, have] = arr[i].split("|");
  if (have === undefined) continue;
  const [cardNum, win] = card.split(":");
  const haveArr = have.split(" ");
  const winArr = win.split(" ");
  const haveArr1: number[] = [];
  let idx1 = 0;
  const winArr1: number[] = [];
  let idx2 = 0;
  for (let i = 0; i < haveArr.length; i++) {
    if (haveArr[i] === "") continue;
    else haveArr1[idx1++] = parseInt(haveArr[i]);
  }
  for (let i = 0; i < winArr.length; i++) {
    if (winArr[i].length !== 0) winArr1[idx2++] = parseInt(winArr[i]);
  }
  let num = 0;
  let matches = 0;
  for (let i = 0; i < haveArr1.length; i++) {
    for (let j = 0; j < winArr1.length; j++) {
      if (haveArr1[i] === winArr1[j]) {
        matches++;
        if (matches === 1) num++;
        else num *= 2;
      }
    }
  }
  ans += num;
}

console.log(ans);

// console.log(arr);
