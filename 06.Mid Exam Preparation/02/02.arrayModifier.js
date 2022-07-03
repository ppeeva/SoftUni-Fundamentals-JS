function solve(input) {
    let arr = input.shift(0).split(' ').map(Number);
    let commandLine = input.shift(0);

    while (commandLine != 'end') {
        let commands = commandLine.split(' ');

        switch (commands[0]) {
            case 'swap':
                let index1 = commands[1];
                let index2 = commands[2];
                if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
                    let temp = arr[index1];
                    arr[index1] = arr[index2];
                    arr[index2] = temp;
                }
                break;
            case 'multiply':
                let idx1 = commands[1];
                let idx2 = commands[2];
                if (idx1 >= 0 && idx1 < arr.length && idx2 >= 0 && idx2 < arr.length) {
                    let product = arr[idx1] * arr[idx2];
                    arr[idx1] = product;
                }
                break;
            case 'decrease':
                arr = arr.map(x => x -= 1);
                break;
        }

        commandLine = input.shift(0);
    }

    console.log(arr.join(', '));
}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
//86, 7382, 2369942, -124, 41, 89, -3

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
//1, 11, 3, 0