function printCharacters(char1, char2) {
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();
    let start = code1;
    let end = code2;
    if(start > end)
    {
        start = code2;
        end = code1;
    }

    let result = [];
    for(let i = start + 1; i < end; i ++){
        result.push(String.fromCharCode(i));
    }
    
    console.log(result.join(' '));
}

printCharacters('a', 'd');
//b c

printCharacters('#', ':');
//$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9

printCharacters('C', '#');
//$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
