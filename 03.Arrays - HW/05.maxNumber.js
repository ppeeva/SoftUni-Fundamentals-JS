function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        if (i < arr.length) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    isTop = false;
                    break;
                }
            }
        }

        if (isTop && !result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    console.log(result.join(' '));

}

solve([1, 4, 3, 2]);
//4 3 2

solve([14, 24, 3, 19, 15, 17]);
//24 19 17

solve([41, 41, 34, 20]);
//41 34 20

solve([27, 19, 42, 2, 13, 45, 48]);
//48