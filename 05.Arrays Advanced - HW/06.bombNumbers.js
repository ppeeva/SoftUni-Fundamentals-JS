function solve(numbers, conditions) {
    const bombNumber = conditions[0];
    const power = conditions[1];

    let index = numbers.indexOf(bombNumber);
    let startIndex = -1;
    let count = 0;

    while (index >= 0) {
        startIndex = index - power;
        startIndex = startIndex < 0 ? 0 : startIndex;
        count = 1 + 2 * power;
        numbers.splice(startIndex, count);
        index = numbers.indexOf(bombNumber);
    }

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    console.log(sum);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//12

solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//5

solve([1, 7, 7, 1, 2, 3], [7, 1]);
//6

solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
//4
