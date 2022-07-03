function solve(input) {
    let books = input.shift(0).split('&');
    let commandLine = input.shift(0);

    while (commandLine != 'Done') {
        let commands = commandLine.split(' | ');

        switch (commands[0]) {
            case 'Add Book':
                if (!books.includes(commands[1])) {
                    books.unshift(commands[1]);
                }
                break;
            case 'Take Book':
                if (books.includes(commands[1])) {
                    books = books.filter(x => x != commands[1]);
                }
                break;
            case 'Swap Books':
                let idx1 = books.indexOf(commands[1]);
                let idx2 = books.indexOf(commands[2]);
                if (idx1 >= 0 && idx2 >= 0) {
                    let temp = books[idx1];
                    books[idx1] = books[idx2];
                    books[idx2] = temp;
                }
                break;
            case 'Insert Book':
                if (!books.includes(commands[1])) {
                    books.push(commands[1]);
                }
                break;
            case 'Check Book':
                let idx = Number(commands[1]);
                if (idx >= 0 && idx < books.length) {
                    console.log(books[idx]);
                }
                break;
        }

        commandLine = input.shift(0);
    }

    console.log(books.join(', '));

}

solve(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]);
// Ulysses, The Great Gatsby, Moby Dick, Alice's Adventures in Wonderland

solve(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);
// Catch-22, Heart of Darkness, Anna Karenina, The Stranger

solve(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);
// Ulysses
// War and Peace, Hamlet, Ulysses, Madame Bovary