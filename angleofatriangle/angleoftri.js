var angles = document.getElementsByClassName("angles");
var submitBtn = document.getElementById("submit-button");
var outputDiv = document.getElementById("output");

var calAngleOfTriangle = () => {
  var angleOne = parseInt(angles[0].value);
  var angleTwo = parseInt(angles[1].value);
  var angleThree = parseInt(angles[2].value);

  var total = angleOne + angleTwo + angleThree;
  
  if (angleOne <= 0 || angleTwo <= 0 || angleThree <= 0) {
    outputDiv.innerText = "Please enter valid angles!!!";
  } else if (total === 180) {
    outputDiv.innerText = "The given angles will form a triangle";
  } else {
    outputDiv.innerText = "The given angles will not form a triangle";
  }
};

submitBtn.addEventListener("click", calAngleOfTriangle);
