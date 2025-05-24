
function sing (){

    let lyrics = "";

    for (let i = 1; i <= 8; i++){
        lyrics += "let it be, ";
        if (i === 4){
            lyrics += "there will be an answer, "
        }
    }
    
    lyrics += "let it be, whisper words of wisdom, let it be";

    return lyrics;
}
//Your code above ^^^

console.log(sing());