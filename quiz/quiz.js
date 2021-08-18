var myForm = document.forms[0];
var outputDiv = document.getElementById("output");
var queDivs = document.querySelectorAll(".queDiv");
var submitBtn = document.querySelector("#submit-button");

var correctAnswers = [
  "option1",
  "option2",
  "option1",
  "option1",
  "option1",
  "option2",
  "option2",
  "option3",
  "option3",
  "option3",
];
let score = 0;

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(myForm);
  let index = 0;
  for (let entry of formData) {
    if (entry[1] == correctAnswers[index]) {
      queDivs[index].style.backgroundColor = "lightgreen";
      score++;
    } else {
      queDivs[index].style.backgroundColor = "pink";
    }
    index++;
  }
  outputDiv.innerHTML = '<h2>'+ score + '</h2>';
  submitBtn.style.display= "none";
});
