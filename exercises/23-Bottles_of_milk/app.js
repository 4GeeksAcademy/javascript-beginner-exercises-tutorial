// Your code here:
let song = () => {
    let botellasdeleche = 99;
    
    for(let i = 99; i >= 0; i--){
        if(i == 1){
            let letra = ``;
            letra += `${botellasdeleche} bottle of milk on the wall, ${botellasdeleche} bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`;
            botellasdeleche--
            console.log(letra);
        }else if(i == 0){
            let letra = ``;
            letra += `No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`;
            console.log(letra);
        }else if(i==2){
            let letra = ``;
            letra += `${botellasdeleche} bottles of milk on the wall, ${botellasdeleche} bottles of milk. Take one down and pass it around, `;
            botellasdeleche--
            letra += `${botellasdeleche} bottle of milk on the wall.`
            console.log(letra);
        }else{
            let letra = ``;
            letra += `${botellasdeleche} bottles of milk on the wall, ${botellasdeleche} bottles of milk. Take one down and pass it around, `;
            botellasdeleche--
            letra += `${botellasdeleche} bottles of milk on the wall.`
            console.log(letra);
        }
    }
}

song();