function solve(input) {
    let words = [];

    let word = '';
    for (let ch of input) {
        let code = ch.charCodeAt();

        if (code >= 65 && code <= 90) {
            if (word.length > 0) {
                words.push(word);
            }
            word = ch;
        }
        else {
            word += ch;
        }
    }
    words.push(word);

    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
//Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

solve('HoldTheDoor');
//Hold, The, Door

solve('ThisIsSoAnnoyingToDo');
//This, Is, So, Annoying, To, Do