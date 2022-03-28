var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  let sum=0;

  var largeArray=family.members.length;
  for (let j=0;j<largeArray;j++){
      for (let k=0; k< family["members"][j]["lucky_numbers"].length;k++){
          sum += family["members"][j]["lucky_numbers"][k];
      }    
    
  }
  return sum;
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.lucky_numbers[3]=33;
var person3 ={
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
}
family.members.push(person3);


/*
function suma (array){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let totalnumsuerte = 0;
totalnumsuerte= suma(person.lucky_numbers);
totalnumsuerte+= suma(person2.lucky_numbers);
totalnumsuerte+= suma(person3.lucky_numbers);

console.log(totalnumsuerte);
*/
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 