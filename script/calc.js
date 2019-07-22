// console.log("working");

var billAmount = document.getElementById("formGroupExampleInput1");

var numOfPeople = document.getElementById("formGroupExampleInput3");

var selectBtn = document.getElementById("pickBtn");

var showAnswer = document.getElementById("answer");

var rateService = document.getElementById("inputGroupSelect01");

function tipRate(){
  if(rateService.value === "1"){
    console.log("Extremely Happy");
  } else if(rateService.value === "2"){
    console.log("Very Happy");
  }else if(rateService.value === "3"){
    console.log("Somewhat Happy");
  }else if(rateService.value === "4"){
    console.log("Not Very Happy");
  }else if(rateService.value === "5"){
    console.log("Not Happy At All");
  }else{
    console.log("Please Make a Selection")
  }
};


function amount(){
  if(billAmount){
    console.log(billAmount.value);
  }
};

function headCount(){
  if(numOfPeople){
    console.log(numOfPeople.value);
  }
};

selectBtn.addEventListener("click", function(){
  headCount();
  // tipRate();
  // amount();
});
