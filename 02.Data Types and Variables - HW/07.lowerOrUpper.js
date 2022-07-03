function solve(letter) {
    if(letter.toLowerCase() == letter){
        console.log("lower-case");
    }
    else {
        console.log("upper-case");
    }
}

solve('L');
// upper-case

solve('f');
// lower-case