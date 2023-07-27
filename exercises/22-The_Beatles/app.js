function sing() {
    let string = ""
    for (let i = 0; i < 4; i++) {
        string = string + "let it be, ";
    }
    string = string + "there will be an answer, ";
    for (let i = 0; i < 5; i++) {
        string = string + "let it be, ";
    }
    string = string + "whisper words of wisdom, let it be";
    return (string)
}

//Your code above ^^^

console.log(sing());