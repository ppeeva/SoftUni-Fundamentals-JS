function solve(input) {
    let targets = input.shift(0).split(' ').map(Number);
    let commandLine = input.shift(0);

    while (commandLine != 'End') {
        let commands = commandLine.split(' ');
        let index = Number(commands[1]);
        switch (commands[0]) {
            case 'Shoot':
                if (index >= 0 && index < targets.length) {
                    let shootPower = Number(commands[2]);
                    targets[index] -= shootPower;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (index >= 0 && index < targets.length) {
                    let addValue = Number(commands[2]);
                    targets.splice(index, 0, addValue);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                let radius = Number(commands[2]);
                let startIndex = index - radius;
                let endIndex = index + radius;
                let count = 1 + 2 * radius;
                if (startIndex >= 0 && endIndex < targets.length) {
                    targets.splice(startIndex, count);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        commandLine = input.shift(0);
    }

    console.log(targets.join('|'));
}

solve(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]);
/*
Invalid placement!
52|100
*/

solve(["1 2 3 4 5",
    "Strike 0 1",
    "End"
]);
/*
Strike missed!
1|2|3|4|5
*/