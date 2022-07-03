function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        
        if (leftSum == rightSum) {
            console.log(i);
            return;
        }

        rightSum = 0;
        leftSum += arr[i];
    }

    console.log('no');
}

solve([1, 2, 3, 3]);
//2

solve([1, 2]);
//no

solve([1]);
//0

solve([1, 2, 3]);
//no

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
//3