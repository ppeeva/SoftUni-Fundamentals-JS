function solve(input) {
    let items = input.shift(0).split(', ');
    let commandLine = input.shift(0);

    while (commandLine != 'Craft!') {
        let commands = commandLine.split(' - ');

        switch (commands[0]) {
            case 'Collect':
                if (!items.includes(commands[1])) {
                    items.push(commands[1]);
                }
                break;
            case 'Drop':
                items = items.filter(x => x != commands[1]);
                break;
            case 'Combine Items':
                let checkItems = commands[1].split(':');
                let index = items.indexOf(checkItems[0]);
                if (index >= 0) {
                    items.splice(index + 1, 0, checkItems[1]);
                }
                break;
            case 'Renew':
                let existsIndex = items.indexOf(commands[1]);
                if (existsIndex >= 0) {
                    let moveItem = commands[1];
                    items.splice(existsIndex, 1);
                    items.push(moveItem);
                }
                break;
        }

        commandLine = input.shift(0);
    }

    console.log(items.join(', '));
}


solve([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
//Iron, Sword, Gold

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
//Sword, Bow, Iron