import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const arr = input.split("\r\n");

console.log(arr);

let ans = 0;

const isValid = (arr: string[], n: string, i: number): boolean => {
  let idx1 = arr[i].indexOf(n);
  let idx2 = idx1 + n.length - 1;
  let isVal = false;
  if (i === 0) {
    if (
      (idx2 <= arr.length - 2 && isNaN(parseInt(arr[i].charAt(idx2 + 1)))) ||
      (idx1 - 1 >= 0 && isNaN(parseInt(arr[i].charAt(idx1 - 1))))
    )
      isVal = true;
    else {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = idx1; k < idx2; k++) {
          if (isNaN(parseInt(arr[j][k]))) {
            isVal = true;
          }
        }
      }
    }
  } else if (i === arr.length - 1) {
    if (
      (idx2 <= arr.length - 2 && isNaN(parseInt(arr[i].charAt(idx2 + 1)))) ||
      (idx1 - 1 >= 0 && isNaN(parseInt(arr[i].charAt(idx1 - 1))))
    ) {
      isVal = true;
    } else {
      for (let j = i - 1; j < arr.length; j++) {
        for (let k = idx1; k < idx2; k++) {
          if (isNaN(parseInt(arr[j][k]))) {
            isVal = true;
          }
        }
      }
    }
  } else {
    if (
      (idx2 <= arr.length - 2 && isNaN(parseInt(arr[i].charAt(idx2 + 1)))) ||
      (idx1 - 1 >= 0 && isNaN(parseInt(arr[i].charAt(idx1 - 1))))
    ) {
      isVal = true;
    } else {
      for (let j = i - 1; j < arr.length; j++) {
        for (let k = idx1; k < idx2; k++) {
          if (isNaN(parseInt(arr[j][k]))) {
            isVal = true;
          }
        }
      }
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = idx1; k < idx2; k++) {
          if (isNaN(parseInt(arr[j][k]))) {
            isVal = true;
          }
        }
      }
    }
  }
  return isVal;
};

for (let i = 0; i < arr.length; i++) {
  let n = "";
  for (let j = 0; j < arr[i].length; j++) {
    if (!isNaN(parseInt(arr[i][j])) && arr[i][j] !== ".") {
      n += arr[i][j];
    }
    if (
      (j + 1 < arr[i].length && arr[i][j + 1] === ".") ||
      j === arr.length - 1
    ) {
      if (isValid(arr, n, i)) {
        ans += parseInt(n);
      }
      n = "";
    }
  }
}

console.log(ans);
