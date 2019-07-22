// console.log("working");

var billAmount = document.getElementById("formGroupExampleInput1");

var numOfPeople = document.getElementById("formGroupExampleInput3");

var selectBtn = document.getElementById("pickBtn");

var showAnswer = document.getElementById("answer");

var rateService = document.getElementById("inputGroupSelect01");



function tipRate(){
  var threePercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.3))/ parseFloat(numOfPeople.value);
  var twoPercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.2))/ parseFloat(numOfPeople.value);
  var onePercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.1))/ parseFloat(numOfPeople.value);
  var halfPercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.05))/ parseFloat(numOfPeople.value);
  var zeroPercent = (parseFloat(billAmount.value) + parseFloat(billAmount.value * 0.0))/ parseFloat(numOfPeople.value);
    if(rateService.value === "1"){
      console.log(threePercent.toFixed(2) + " per person!");
    } else if(rateService.value === "2"){
      console.log(twoPercent.toFixed(2) + " per person!");
    }else if(rateService.value === "3"){
      console.log(onePercent.toFixed(2) + " per person!");
    }else if(rateService.value === "4"){
    console.log(halfPercent.toFixed(2) + " per person!");
    }else if(rateService.value === "5"){
      console.log(zeroPercent.toFixed(2) + " per person!");
    }else{
      console.log("Please Make a Selection")
    }
};


// function amount(){
//   if(billAmount){
//     console.log(billAmount.value);
//   }
// };

// function headCount(){
//   if(numOfPeople){
//     console.log(numOfPeople.value);
//   }
// };

selectBtn.addEventListener("click", function(){
  // headCount();
  tipRate();
  // amount();
});
