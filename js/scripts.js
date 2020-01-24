$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var numberInput =parseInt($("input#number").val());
    
    // var numberArr = numberInput.split("");
    

    $("div.result").text(beepBoop(numberInput));
    console.log(beepBoop(numberInput));
    //call beepBop() function on each word in the numberArr
    // for(var i = 0; i < numberArr.length; i++) {
    //   $(".output").append(" " + translate(wordArr[i]));
    // }
  });
});


function beepBoop(numberInput){
  var numberRange=[];
  
  for(var index=0; index<=numberInput;index++){
    var exceptions=[1,2,3];
    if(numberRange[index].includes(exceptions[0])){
      numberRange[index].push("beep");
    }else {
      numberRange.push(index);
    }
    return numberRange;
  }
}