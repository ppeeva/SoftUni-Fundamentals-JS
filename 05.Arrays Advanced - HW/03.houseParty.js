function solve(guestsList) {
    let guests = [];

    for (let message of guestsList) {
        let name = message.split(' ')[0];
        if (message.indexOf('is going') >= 0) {
            if(!guests.includes(name)){
                guests.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }
        }
        else if (message.indexOf('is not going') > 0) {
            let idx = guests.indexOf(name);
            if(idx >= 0){
                guests.splice(idx);
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}

solve(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
/*
John is not in the list!
Allie
*/

solve(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
/*
Tom is already in the list!
Tom
Annie
Garry
Jerry
*/
