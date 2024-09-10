function sing(){
    let song="";
    for(let i=0;i<=3;i++){
        song+="let it be,"+" ";
    }
    song+="there will be an answer, ";
    for(let i=0;i<5;i++){
        song+="let it be,"+" ";
    }
    song+="whisper words of wisdom, let it be";
    return song;
}

//Your code above ^^^

console.log(sing());