function printMatrix(num) {
    for(let i = 0; i < num; i++){
        let row = [];
        for(let j = 0; j < num; j++){
            row.push(num);
        }
        console.log(row.join(' '));
    }
}

printMatrix(3);
/*
3 3 3
3 3 3
3 3 3
*/

printMatrix(7);
/*
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
*/

printMatrix(2);
/*
2 2
2 2
*/

