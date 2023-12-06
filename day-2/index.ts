import fs from "fs";

const data: string = fs.readFileSync("./input.txt", "utf-8");
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
  let val = gameObj[game]; // 4 blue, 16 green, 2 red; 5 red, 11 blue, 16 green; 9 green, 11 blue; 10 blue, 6 green, 4 red
  let subsets = val.split(";"); // ["4 blue, 16 green, 2 red", "5 red, 11 blue, 16 green","9 green, 11 blue","10 blue, 6 green, 4 red"]
  let maxBlue = 0;
  let maxGreen = 0;
  let maxRed = 0;
  subsets.forEach((subset: string) => {
    // subset -> "4 blue, 16 green, 2 red"
    let items = subset.split(", "); // ["4 blue", "16 green", "2 red"]
    items.forEach((item) => {
      // item => 4 blue
      let [count, color] = item.trim().split(" "); // count = 4, color = blue
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
