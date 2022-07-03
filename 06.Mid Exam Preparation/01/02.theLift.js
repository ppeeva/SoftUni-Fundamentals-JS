function solve(input) {
    let max = 4;
    let waitingPeople = Number(input[0]);
    let wagons = [];
    if (input[1].length > 0) {
        wagons = input[1].split(' ').map(Number);
    }
    let hasEmptySpace = false;

    for (let i = 0; i < wagons.length; i++) {
        let currentSpace = max - wagons[i];
        if (currentSpace == 0) {
            continue;
        }

        if (waitingPeople >= currentSpace) {
            wagons[i] = max;
            waitingPeople -= currentSpace;
        } else {
            wagons[i] += waitingPeople;
            waitingPeople = 0;
            hasEmptySpace = true;
        }
    }

    if (hasEmptySpace) {
        console.log("The lift has empty spots!");
    } else if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
    }

    console.log(wagons.join(' '));
}

solve(["15", "0 0 0 0 0"]);
/*
The lift has empty spots!
4 4 4 3 0
*/

solve(["20", "0 2 0"]);
/*
There isn't enough space! 10 people in a queue!
4 4 4
*/