function getId(id) {
  return document.getElementById(id);
}

//getId(voyage_data).value = '';
document.getElementById("voyage_data").value = "initial";

let addBtn = document.getElementById("voyage_calc");
let outputDetails = document.getElementById("calc_output");

addBtn.addEventListener("click", function() {
  //let newText = document.getElementById('voyage__data').value;
  let newText = document.getElementById("voyage__data").value;
  let outputMainText = parcer(newText);
  outputDetails.textContent = outputMainText + "/n TOTAL: $";
});
