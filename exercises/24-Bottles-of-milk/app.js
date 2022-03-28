// Your code here:
function sing(){
    let coro ="bottles of milk on the wall, 99 bottles of milk. Take one down and pass it around, 98 bottles of milk on the wall.";
    let corosingular="bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.";
    let corozero ="No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall";
    for (let i=99; i>-1;i--){
        if(i>=2){
            console.log(i+" "+coro);
        }else if(i==1){
            console.log(i+" "+corosingular);
        }else if(i==0){
            console.log(" "+corozero);
        }else {
            return 0;
        }
    }
    
}

console.log(sing());