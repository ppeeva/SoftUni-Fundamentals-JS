function solve(arr) {
    let copyArr = [];
    for (let el of arr) {
        copyArr.push(el);
    }
    
    for (let j = copyArr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            copyArr[i] += copyArr[i + 1];
        }
    }

    console.log(copyArr[0]);
}

solve([2, 10, 3]);
//25

solve([5, 0, 4, 1, 2]);
//35

solve([1]);
//1