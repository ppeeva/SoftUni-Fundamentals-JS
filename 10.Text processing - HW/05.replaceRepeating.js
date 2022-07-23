function solve(input) {
    let result = '';

    let currentChar = '';
    for (let ch of input) {
        if (ch != currentChar) {
            currentChar = ch;
            result += ch;
        }
    }

    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');
// abcdedsa

solve('qqqwerqwecccwd');
//qwerqwecwd