var sideA = document.getElementById("a");
var sideB = document.getElementById("b");
var submitButton = document.getElementById("submit-button");
var outputDiv = document.getElementById("result");

var calculateHyp = () => {
  var a = Number(sideA.value);
  var b = Number(sideB.value);

  if (a <= 0 || b <= 0) {
    outputDiv.innerText = "The give valid sides of a triangle! ";
  } else {
    var sumOfSquares = a * a + b * b;
    var c = Math.sqrt(sumOfSquares).toFixed(2);
    outputDiv.innerText = "The hypotenuse is " + c;
  }
};

submitButton.addEventListener("click", calculateHyp);
