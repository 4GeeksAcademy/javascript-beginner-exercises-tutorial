/* Done - check test and clean up code for student use */

const sing =()=> {
  var string = "";
  
  for(var i = 1; i <= 12; i++){
   if(i == 5){
     string += "words of wisdom, ";
   }
   else if(i == 11){string += "there will be an answer, "}
   else if(i == 12){string += "let it be ";}
   else {
     string += "let it be, ";
   }
  }
  return string;
}

//Your code above ^^^

console.log(sing());