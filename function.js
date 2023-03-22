function getRandomIntInclusive(event) {
  event.preventDefault();
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").value = result;
}

document.addEventListener("DOMContentLoaded", function(event) { 
  const sortearBtn = document.getElementById("sortear-btn");
  sortearBtn.addEventListener("click", getRandomIntInclusive);
});

function clearForm() {
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  document.getElementById("result").value = "";
  const sortearBtn = document.getElementById("clear-btn");

}

