// console.log("working");

var billAmount = document.getElementById("formGroupExampleInput1");

var numOfPeople = document.getElementById("formGroupExampleInput3");

var selectBtn = document.getElementById("pickBtn");

var clearBtn = document.getElementById("redoBtn");

var showAnswer = document.getElementById("answer");

var rateService = document.getElementById("inputGroupSelect01");



function tipRate(){
  var threePercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.3))/ parseFloat(numOfPeople.value);
  var twoPercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.2))/ parseFloat(numOfPeople.value);
  var onePercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.1))/ parseFloat(numOfPeople.value);
  var halfPercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.05))/ parseFloat(numOfPeople.value);
  var zeroPercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.0))/ parseFloat(numOfPeople.value);
    if(rateService.value === "1"){
      showAnswer.innerHTML = threePercent.toFixed(2) + " per person!";
    } else if(rateService.value === "2"){
      showAnswer.innerHTML = twoPercent.toFixed(2) + " per person!";
    }else if(rateService.value === "3"){
      showAnswer.innerHTML = onePercent.toFixed(2) + " per person!";
    }else if(rateService.value === "4"){
    showAnswer.innerHTML = halfPercent.toFixed(2) + " per person!";
    }else if(rateService.value === "5"){
      showAnswer.innerHTML = zeroPercent.toFixed(2) + " per person!";
    }else{
      showAnswer.innerHTML = "Please Make a Selection";
    }
};

function clear(){
  billAmount.value = "";
  numOfPeople.value = "";
  rateService.selectedIndex = 0;
  showAnswer.innerHTML = "";
};

selectBtn.addEventListener("click", function(){
  tipRate();
});

clearBtn.addEventListener("click", function(){
  clear();
});
