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
    for(numberRange[index]){
      if(numberRange[index].split() === 1)
        numberRange[index].push("beep");
    }
    }if(numberInput) {
      numberRange.push(index);
    }
  }
  return numberRange;
}












// $(document).ready(function(){
//   $("form#form").submit(function(event){
//     event.preventDefault();
//     var number = $("input#number").toString().val();
//     console.log(number);
//     var numArray =number.split("");

// console.log(numArray);

//     var exceptions= [1, 2, 3]; 
    // var result = beepBoopGame(number);
    // $(".result").text(result);
  

    // var result = numArray;
    // $(".result").text(result);
    // var returnResult=function(number){
    //   for (var index = 1; index < number; index ++){
    //     // return(index);
    //     $(".result").text(returnResult);
    //   }
    //   }

     
      
//   });
// });


// function findExceptions(numArray,exceptions){
//   for(var index = 0; index<numArray.length; index++){
//     if(numArray.includes(exceptions[index])) {
//       return index;
//     }
//   }
// }

