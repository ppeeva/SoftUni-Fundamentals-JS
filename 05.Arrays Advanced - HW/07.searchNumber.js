function solve(numbers, conditions) {
    const countToTake = conditions[0];
    const countToDelete = conditions[1];
    const searchNumber = conditions[2];

    let arr = numbers.slice(0, countToTake);
    arr.splice(0, countToDelete);
    arr = arr.filter(x => x == searchNumber);

    console.log(`Number ${searchNumber} occurs ${arr.length} times.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
//Number 3 occurs 1 times.

solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);
//Number 5 occurs 1 times.
