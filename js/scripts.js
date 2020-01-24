$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var number = ($("#number").val());
    var numArray = number.split("");
    var exceptions= [1, 2, 3]; 
    
    var returnResult=function(number){
      for (var index = 1; index < number; index ++){
        // return(index);
        $(".result").text(returnResult);
      }
      }

     
      
  });
});


// function findExceptions(numArray,exceptions){
//   for(var index = 0; index<numArray.length; index++){
//     if(numArray.includes(exceptions[index])) {
//       return index;
//     }
//   }
// }

