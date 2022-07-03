function solve(input) {
    let targets = input.shift(0).split(' ').map(Number);
    let commandLine = input.shift(0);
    let shotCount = 0;

    while (commandLine != 'End') {
        let index = Number(commandLine);
        if (index >= 0 && index < targets.length) {

            let currentValue = targets[index];
            if (currentValue != -1) {
                targets[index] = -1;
                shotCount++;
                targets = targets.map(x => {
                    if (x > currentValue && x != -1) {
                        return x - currentValue;
                    } else if (x <= currentValue && x != -1) {
                        return x + currentValue;
                    }
                    return x;
                });
            }
        }

        commandLine = input.shift(0);
    }

    console.log(`Shot targets: ${shotCount} -> ${targets.join(' ')}`);
}

solve(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);
//Shot targets: 3 -> -1 -1 130 -1

solve(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);
//Shot targets: 4 -> -1 120 -1 66 -1 -1