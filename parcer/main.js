function getId(id) {
  return document.getElementById(id);
}

function parseV(value) {
  value = value.replace(/\n/g, " ");
  var arr1 = value.split("    ");
  arr1.shift();
  var newArrDate = [];
  var newArrHotel = [];

  //date array
  var dateArr1 = arr1[1].split(" ");
  newArr.push(dateArr1[0].replace("-", ""));
  newArr.push(dateArr1[2].replace("-", ""));

  //hotel array
  var hotelArr = arr1[0].split(' ');
  for (let i = 0; i < 4) {
      hotelArr.shift();
  }

  //room array
  var roomArr = arr1[2].split(' ');
  roomArr.shift();
  roomArr.shift();
  var currentH = roomArr.join(' ');
  newArrHotel.push(currentH);

}
