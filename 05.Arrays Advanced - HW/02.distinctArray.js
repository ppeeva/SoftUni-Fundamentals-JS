function solve(input) {
    for(let i = 0; i < input.length; i ++){
        if(input.slice(0, i).includes(input[i])){
            input.splice(i,1);
            i--;
        }
    }

    console.log(input.join(' '));
}

solve([1, 2, 3, 4]);
//1 2 3 4

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
//7 8 9 2 3 4 1

solve([20, 8, 12, 13, 4, 4, 8, 5]);
//20 8 12 13 4 5
