function solve(word, text) {
    text = text.toLocaleLowerCase();
    words = text.split(' ');

    if (words.includes(word.toLocaleLowerCase())) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
}

solve('javascript',
    'JavaScript is the best programming language');
//javascript 

solve('python',
    'JavaScript is the best programming language');
//python not found!
