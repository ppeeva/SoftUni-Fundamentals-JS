function printSpecial(input) {
    let words = input.split(' ');

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let special = word.substring(1);
            let isSpecial = true;

            for(let ch of special){
                let code = ch.charCodeAt();
                if(code < 65 || (code > 90 && code < 97) || code > 122){
                    isSpecial = false;
                    break;
                }
            }
            
            if(isSpecial){
                console.log(special);
            }
        }
    }
}

printSpecial('Nowadays everyone uses # to tag a #special word in #socialMedia');
/*
special
socialMedia
*/

printSpecial('The symbol # is known #variously in English-speaking #regions as the #number sign');
/*
variously
regions
number
*/