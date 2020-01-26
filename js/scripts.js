$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var numberInput =parseInt($("input#number").val());
    $(".resultdiv").show();
    $("div.result").text(beepBoop(numberInput)).show();
  });
});
function beepBoop(numberInput){
  var numberRange=[];
  for(var index=0; index<=numberInput;index++){
    if(index.toString().includes("3")){
      numberRange.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }else if(index.toString().includes("2")){
      numberRange.push("Boop!");
    }else if(index.toString().includes("1")){
      numberRange.push("Beep!");
    }else {numberRange.push(index);
    }
    }
    return numberRange;
  }
