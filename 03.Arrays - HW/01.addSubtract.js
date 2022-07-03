function solve(arr) {
    let originalSum = 0;
    let modifiedSum = 0; 
    for (let i = 0; i < arr.length; i++) {
        originalSum += arr[i];
        if(arr[i] % 2 == 0){
            arr[i] += i;
        }
        else {
            arr[i] -= i;
        }
        modifiedSum += arr[i];
    }

    console.log(arr);
    console.log(originalSum);
    console.log(modifiedSum);
}

solve([5, 15, 23, 56, 35]);
/*
(5) [5, 14, 21, 59, 31]
134
130
*/

solve([-5, 11, 3, 0, 2]);
/*
(5) [-5, 10, 1, 3, 6]
11
15
*/