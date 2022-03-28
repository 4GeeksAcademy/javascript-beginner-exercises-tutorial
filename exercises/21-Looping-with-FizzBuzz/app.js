function fizzBuzz() {  
	// Your code here
	var i =1;
	for (i=1 ; i < 101; ){

	if(i%3==0 && i%5==0 ){
		console.log("FizzBuzz");
	}else if(i%3==0){
		console.log("Fizz");

	}else if(i%5==0){
		console.log("Buzz");

	}else {
		console.log(i);
	}

		
		i++
	}
}

fizzBuzz();