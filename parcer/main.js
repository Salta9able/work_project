function getId(id) {
  return document.getElementById(id);
}

document.getElementById("voyage_data").value = "";
let addBtn = getId("voyage_calc");
let output = getId("calc_output");

addBtn.addEventListener("click", function() {
  let newText = getId("voyage_data").value;
  let step1 = trimUseless("Name", newText);
  let step2 = trimUseless("From", step1);
  let dateRaw = trimNeeded("Room", step2);
  let step3 = trimUseless("Type", step2);

  let hotelName = trimNeeded("Starting", step1);
  let date = dateCorrector(dateRaw);
  let room = trimNeeded("Meal", step3);
  let mealPlan = trimUseless("Plan", step3);

  let occupancy = getId("occupancy").value;

  //calculation part
  let ticket = parseFloat(getId("voyage_ticket").value);
  let transfer = parseFloat(getId("voyage_transfer").value);
  let hotel = parseFloat(getId("voyage_hotel").value);
  let commission = parseFloat(getId("voyage_commission").value);

  let totalPrice = Math.round((ticket + transfer + hotel) / commission);

  output.innerHTML =
    date +
    "</br>" +
    hotelName +
    " - " +
    room +
    " " +
    occupancy +
    " " +
    mealPlan +
    "</br>TOTAL: $" +
    totalPrice;
});

function trimUseless(word, paragraph) {
  let wordLength = word.length;
  let firstIndexOf = paragraph.indexOf(word);
  let lastIndexOf = firstIndexOf + wordLength;
  let newPara = paragraph.substring(lastIndexOf).trim();
  return newPara;
}

function trimNeeded(word, paragraph) {
  let pointing = paragraph.indexOf(word);
  let neededPhrase = paragraph.substring(0, pointing).toUpperCase();
  return neededPhrase;
}

function dateCorrector(rawDate) {
  return rawDate
    .trim()
    .replace(/-/g, "")
    .replace(/2019/g, "")
    .replace(/2020/g, "")
    .replace(/ TO /, "-");
}
