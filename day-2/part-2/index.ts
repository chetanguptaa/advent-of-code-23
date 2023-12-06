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
  ans += maxBlue * maxGreen * maxRed;
}

console.log(ans);
