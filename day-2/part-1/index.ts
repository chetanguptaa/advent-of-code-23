import fs from "fs";

const data: string = fs.readFileSync("../input.txt", "utf-8");
const arr: string[] = data.split("\r\n");
arr.pop();

const gameObj = {};

for (let i = 0; i < arr.length; i++) {
  const game = arr[i].split(":");
  const key = game[0];
  const val = game[1];
  gameObj[key] = val;
}

const MAXR = 12;
const MAXG = 13;
const MAXB = 14;

let ans = 0;
for (const game in gameObj) {
  let val = gameObj[game];
  let subsets = val.split(";");
  let maxBlue = 0;
  let maxGreen = 0;
  let maxRed = 0;
  subsets.forEach((subset: string) => {
    let items = subset.split(", ");
    items.forEach((item) => {
      let [count, color] = item.trim().split(" ");
      let newCount = parseInt(count);
      if (color === "blue") {
        maxBlue = Math.max(maxBlue, newCount);
      } else if (color === "green") {
        maxGreen = Math.max(maxGreen, newCount);
      } else if (color === "red") {
        maxRed = Math.max(maxRed, newCount);
      }
    });
  });
  if (maxBlue <= MAXB && maxGreen <= MAXG && maxRed <= MAXR) {
    ans += parseInt(game.split(" ")[1]);
  }
}

console.log(ans);
