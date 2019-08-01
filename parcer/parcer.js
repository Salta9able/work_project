//useless function

function parcer(value) {
  let arrayFull = value.split("\n");

  let newArr = [];

  let hotel =
    arrayFull[0]
      .substring(12, arrayFull[0].length + 1)
      .trim()
      .toUpperCase() + " - ";

  let period =
    arrayFull[1]
      .substring(13, arrayFull[1].length + 1)
      .trim()
      .replace(/-/g, "")
      .replace(/2019/g, "")
      .replace(/ to /, "-")
      .toUpperCase() + "\n";

  let room = arrayFull[2].substring(9, arrayFull[2].length + 1).trim() + " ";

  let mealPlan = arrayFull[3].substring(9, arrayFull[2].length + 1).trim();

  newArr.push(period);
  newArr.push(hotel);
  newArr.push(room);
  newArr.push(mealPlan);

  let finalStr = newArr.join("");
  return finalStr;
}
