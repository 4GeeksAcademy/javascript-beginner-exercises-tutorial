var total = prompt('How many km are left to go?');

// Your code below:
var mensaje;

if(100<total){
    mensaje= "We still have a bit of driving left to go"
}else if (50<total){
    mensaje= "We'll be there in 5 minutes"
}
else {
    mensaje= "I'm parking. I'll see you right now"
}
console.log(mensaje)