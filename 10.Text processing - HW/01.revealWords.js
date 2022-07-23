function reveal(replacements, text) {
    let replacementWords = replacements.split(', ');
    let textWords = text.split(' ');

    for (let i = 0; i < textWords.length; i++) {
        if (textWords[i] == "*".repeat(textWords[i].length)) {
            replacement = replacementWords.filter(x => x.length == textWords[i].length);
            if(replacement.length > 0){
                textWords[i] = replacement[0];
            }
        }
    }

    console.log(textWords.join(' '));
}

reveal('great',
    'softuni is ***** place for learning new programming languages');
//softuni is great place for learning new programming languages

reveal('great, learning',
    'softuni is ***** place for ******** new programming languages');
//softuni is great place for learning new programming languages