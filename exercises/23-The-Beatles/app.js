var texto1 = " ";
var texto2 = " ";

//Your code above ^^^
function leitbe(t1){
    for (let i =0 ; i<t1; i++){
        //console.log("let it be,");
        texto1+="let it be,";
    }
    return texto1;
}
function sing(){
    texto2=leitbe (4);
    texto2+='whisper words of wisdom,';
    texto2+=leitbe (5);
    texto2+=' there will be an answer,';
    texto2+=leitbe (1);
    return texto2;
//console.log('whisper words of wisdom,');
//leitbe (5);
//console.log(' there will be an answer, ');
//leitbe (1);
}

console.log(sing());
/* esto debe estar dentro de funcion sing()
    let coro ='let it be, let it be, let it be, let it be,'
     'whisper words of wisdom,'
     ' let it be, let it be, let it be, let it be, let it be,'
     ' there will be an answer, let it be';
     */
   // return coro;