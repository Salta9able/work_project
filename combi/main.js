function getId(id) {
  return document.getElementById(id);
}

//dealing with hotel1
let button1 = getId("addBtn1");
let hotel1PriceList = [];
let hotel1NameList = [];

button1.addEventListener("click", function() {
  let demo1 = getId("demoHotel1");
  let hotel1Name = getId("hotel1Name");
  let hotel1Price = getId("hotel1Price");

  //saving the data
  hotel1PriceList.push(hotel1Price.value);
  hotel1NameList.push(hotel1Name.value);

  //demonstrating the data
  let demoChild = document.createElement("p");
  demoChild.textContent = hotel1Name.value + ": $" + hotel1Price.value;
  demo1.appendChild(demoChild);

  hotel1Name.value = "";
  hotel1Price.value = "";
});

//dealing with hotel2
let button2 = getId("addBtn2");
let hotel2PriceList = [];
let hotel2NameList = [];

button2.addEventListener("click", function() {
  let demo2 = getId("demoHotel2");
  let hote21Name = getId("hotel2Name");
  let hote21Price = getId("hotel2Price");

  //saving the data
  hotel2PriceList.push(hotel2Price.value);
  hotel2NameList.push(hotel2Name.value);

  //demonstrating the data
  let demoChild = document.createElement("p");
  demoChild.textContent = hotel2Name.value + ": $" + hotel2Price.value;
  demo2.appendChild(demoChild);

  hotel2Name.value = "";
  hotel2Price.value = "";
});

//calculating
let calcButton = getId("calculate");

calcButton.addEventListener("click", function() {
  let outputCalc = getId("outputCalc");
  let transferPrice = parseFloat(getId("transferPrice").value);
  let ticketPrice = parseFloat(getId("ticketPrice").value);
  let commission = parseFloat(getId("commission").value);

  let numHotel1Price = hotel1PriceList.map(x => parseFloat(x));
  let numHotel2Price = hotel2PriceList.map(x => parseFloat(x));

  console.log(numHotel1Price.length);
  console.log(numHotel2Price.length);
  console.log(hotel1NameList.length);
  console.log(hotel2NameList);

  for (let i = 0; i < numHotel1Price.length; i++) {
    for (let j = 0; j < numHotel2Price.length; j++) {
      let finalPrice = Math.round(
        (numHotel1Price[i] + numHotel2Price[j] + transferPrice + ticketPrice) /
          commission
      );
      let parag = document.createElement("p");
      parag.innerHTML =
        hotel1NameList[i] +
        "</br>" +
        hotel2NameList[j] +
        "</br>" +
        "TOTAL: $" +
        finalPrice;
      outputCalc.appendChild(parag);
    }
  }
});
