function solve(arr, num) {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == num){
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }

}

solve([1, 7, 6, 2, 19, 23], 8);
/*
1 7
6 2
*/

solve([14, 20, 60, 13, 7, 19, 8], 27);
/*
14 13
20 7
19 8
*/

solve([1, 2, 3, 4, 5, 6], 6);
/*
1 5
2 4
*/
