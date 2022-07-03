
function solve(start, end) {
    let sum = 0;
    let line = '';

    for(let i = start; i <= end; i++){
        line += `${i} `;
        sum += i;
    }

    console.log(line);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
/*
5 6 7 8 9 10 
Sum: 45
*/

solve(0, 26);
/*
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 
Sum: 351
*/

solve(50, 60);
/*
50 51 52 53 54 55 56 57 58 59 60 
Sum: 605
*/