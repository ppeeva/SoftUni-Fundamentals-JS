function solve(input) {
    let elements = input.shift(0).split(' ');
    let commandLine = input.shift(0);
    let moves = 0;

    while (commandLine != 'end') {
        moves++;
        let indices = commandLine.split(' ').map(Number);
        let isValid1 = indices[0] >= 0 && indices[0] < elements.length;
        let isValid2 = indices[1] >= 0 && indices[1] < elements.length;
        let sameIndices = indices[0] == indices[1];
        let areMatching = elements[indices[0]] == elements[indices[1]];

        if (sameIndices || !isValid1 || !isValid2) {
            let newEl = `-${moves}a`;
            let middleIndex = elements.length / 2;
            elements.splice(middleIndex, 0, newEl, newEl);
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            if (areMatching) {
                let foundValue = elements[indices[0]];
                console.log(`Congrats! You have found matching elements - ${foundValue}!`);
                elements = elements.filter(x => x != foundValue);
            } else {
                console.log("Try again!");
            }
        }

        if (elements.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }


        commandLine = input.shift(0);
    }

    if (elements.length > 0) {
        console.log("Sorry you lose :(");
        console.log(elements.join(' '));
    }
}

solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);
/*
Congrats! You have found matching elements - 1!
Invalid input! Adding additional elements to the board
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 3!
Congrats! You have found matching elements - -2a!
Sorry you lose :(
4 4 5 5
*/

solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
/*
Congrats! You have found matching elements - a!
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 4!
You have won in 3 turns!
*/

solve([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
/*
Try again!
Try again!
Try again!
Try again!
Sorry you lose :(
a 2 4 a 2 4
*/