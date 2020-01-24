$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var number = ($("#number").val());
    var numArray = number.split("");
    var exceptions= [1, 2, 3]; 
    var result = beepBoopGame(number);
    $(".result").text(result);
  

    // var result = numArray;
    // $(".result").text(result);
    // var returnResult=function(number){
    //   for (var index = 1; index < number; index ++){
    //     // return(index);
    //     $(".result").text(returnResult);
    //   }
    //   }

     
      
  });
});
function beepBoopGame(number){  
  numberRange = [];
  for(index = 0; index <= number; index++){
    numberRange.push(index);
    return (numberRange);
}
}

// function findExceptions(numArray,exceptions){
//   for(var index = 0; index<numArray.length; index++){
//     if(numArray.includes(exceptions[index])) {
//       return index;
//     }
//   }
// }

