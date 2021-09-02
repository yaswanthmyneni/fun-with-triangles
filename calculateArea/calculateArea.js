var myForm = document.getElementById("myForm");
var submitButton = document.getElementById("submit-button");
var valueZero = document.getElementById("zero");
var valueOne = document.getElementById("one");
var valueTwo = document.getElementById("two");

valueZero.style.display = "none";
valueOne.style.display = "none";
valueTwo.style.display = "none";

function openRelevantDiv() {
  var formResults = new FormData(myForm);

  for (let i of formResults.values()) {
    if (i == "0") {
      valueZero.style.display = "block";
      valueOne.style.display = "none";
      valueTwo.style.display = "none";
    } else if (i == "1") {
      valueZero.style.display = "none";
      valueOne.style.display = "block";
      valueTwo.style.display = "none";
    } else if (i == "2") {
      valueZero.style.display = "none";
      valueOne.style.display = "none";
      valueTwo.style.display = "block";
    }
  }
}

submitButton.addEventListener("click", openRelevantDiv);

//ZERO
var resultZeroInputs = document.getElementsByClassName("zero-inputs");
var resultZeroBtn = document.getElementById("zero-button");
var resultZero = document.getElementById("zero-result");

var areaOfTriZero = () => {
  var base = resultZeroInputs[0].value;
  var height = resultZeroInputs[1].value;

  var areaOfTriangle = (1 / 2) * base * height;

  if (base <= 0 || height <= 0) {
    resultZero.innerText = "Please enter valid base and height";
  } else resultZero.innerText = areaOfTriangle;
};

resultZeroBtn.addEventListener("click", areaOfTriZero);

//ONE
var resultOneInputs = document.getElementsByClassName("one-inputs");
var resultOneBtn = document.getElementById("one-button");
var resultOne = document.getElementById("one-result");

var areaOfTriOne = () => {
  var sideA = Number(resultOneInputs[0].value);
  var sideB = Number(resultOneInputs[1].value);
  var sideC = Number(resultOneInputs[2].value);

  if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
    var semiPerimeter = (sideA + sideB + sideC) / 2;
    var areaOfTriangle = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - sideA) *
        (semiPerimeter - sideB) *
        (semiPerimeter - sideC)
    ).toFixed(2);
    resultOne.innerText = areaOfTriangle;
  } else {
    resultOne.innerText = "Please enter correct sides";
  }
};

resultOneBtn.addEventListener("click", areaOfTriOne);

//TWO
var resultTwoInputs = document.getElementsByClassName("two-inputs");
var resultTwoBtn = document.getElementById("two-button");
var resultTwo = document.getElementById("two-result");

var areaOfTriTwo = () => {
  var sideB = Number(resultTwoInputs[0].value);
  var sideC = Number(resultTwoInputs[1].value);
  var angleA = Number(resultTwoInputs[2].value);

  if (sideB <= 0 || sideC <= 0 || angleA <= 0) {
    resultTwo.innerText = "Please enter valid input";
  } else {
    var sinA = Math.sin(angleA);
    var areaOfTriangle = (1 / 2) * sideB * sideC * sinA;
    resultTwo.innerText = areaOfTriangle;
  }
};

resultTwoBtn.addEventListener("click", areaOfTriTwo);
