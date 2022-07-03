function isPasswordValid(password) {
    let invalid = false;
    if(password.length < 6 || password.length > 10){
        invalid = true;
        console.log("Password must be between 6 and 10 characters");
    }

    let digitsCount = 0;
    let chars = password.split('');
    let hasInvalidChar = false;

    for(let char of chars){
        let code = char.charCodeAt();
        if(code >= 48 && code <= 57){
            digitsCount++;
        }
        else if(code < 65 || (code > 90 && code < 97) || code > 122){
            hasInvalidChar = true;
        }
    }

    if(hasInvalidChar){
        invalid = true;
        console.log("Password must consist only of letters and digits");
    }

    if(digitsCount < 2){
        invalid = true;
        console.log("Password must have at least 2 digits");
    }

    if(!invalid){
        console.log("Password is valid");
    }
}

isPasswordValid('logIn');
/*
Password must be between 6 and 10 characters
Password must have at least 2 digits
*/

isPasswordValid('MyPass123');
//Password is valid

isPasswordValid('Pa$s$s');
/*
Password must consist only of letters and digits
Password must have at least 2 digits
*/

