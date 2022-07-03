
function solve(num) {
    for(let i = 1; i <= num; i++){
        let line = "";
        for(let j = 1; j <= i; j++){
            line += `${i} `;
        }
        console.log(line);
    }
}

solve(3);
/*
1 
2 2 
3 3 3 
*/

solve(5);
/*
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
*/

solve(6);
/*
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
6 6 6 6 6 6 
*/