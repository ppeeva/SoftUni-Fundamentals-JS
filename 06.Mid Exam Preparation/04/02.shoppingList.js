function solve(input) {
    let groceries = input.shift(0).split('!');
    let commandLine = input.shift(0);

    while (commandLine != 'Go Shopping!') {
        commands = commandLine.split(' ');
        let item = commands[1];
        
        switch (commands[0]) {
            case 'Urgent':
                if (!groceries.includes(item)) {
                    groceries.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (groceries.includes(item)) {
                    groceries = groceries.filter(x => x != item);
                }
                break;
            case 'Correct':
                if (groceries.includes(item)) {
                    groceries = groceries.map(x => x == item ? commands[2] : x);
                }
                break;
            case 'Rearrange':
                if (groceries.includes(item)) {
                    groceries = groceries.filter(x => x != item);
                    groceries.push(item);
                }
                break;
        }

        commandLine = input.shift(0);
    }

    console.log(groceries.join(', '));
}


solve(["Tomatoes!Potatoes!Bread!Potatoes!Salt",
    "Urgent Milk",
    "Unnecessary Salt",
    "Correct Bread Onion",
    "Rearrange Potatoes",
    "Go Shopping!"
]);
//Milk, Tomatoes, Onion, Potatoes

solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
//Tomatoes, Potatoes, Bread

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);
//Milk, Onion, Salt, Water, Banana