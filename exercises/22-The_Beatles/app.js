let sing = () => {
    let letra = "";
    for(let i = 0; i < 4; i++){
        letra += "let it be, ";
    }
    
    letra += "there will be an answer, ";

    for(let i = 0; i < 5; i++){
        letra += "let it be, ";
    }

    letra += "whisper words of wisdom, ";

    for(let i = 0; i < 1; i++){
        letra += "let it be";
    }

    return letra;
}

//Your code above ^^^

console.log(sing());