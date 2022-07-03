function solve(numbers) {
    let sorted = [];
    let end = numbers.length; 
    numbers.sort((a,b) => b-a);

    for (let i = 0; i < end; i++) {
        if(i % 2 == 0){
            sorted.push(numbers.shift());
        }
        else {
            sorted.push(numbers.pop());
        }
    }

    console.log(sorted.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
//94 1 69 2 63 3 52 18 31 21

solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
//690 2 47 6 45 7 34 19 32 32