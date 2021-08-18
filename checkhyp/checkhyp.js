var sideA = document.getElementById("a");
var sideB = document.getElementById("b");
var submitButton = document.getElementById("submit-button");
var outputDiv = document.getElementById("result");

var calculateHyp = () => {
  var a = parseInt(sideA.value);
  var b = parseInt(sideB.value);
  var sumOfSquares = a * a + b * b;
  var c = Math.sqrt(sumOfSquares).toFixed(2);

  outputDiv.innerText = "The hypotenuse is " + c;
};

submitButton.addEventListener("click", calculateHyp);
