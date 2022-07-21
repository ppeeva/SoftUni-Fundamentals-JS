function party(input){
    let partyIndex = input.indexOf('PARTY');
    let invites = input.slice(0, partyIndex);
    let guests = input.slice(partyIndex + 1, input.length);

    for(let guest of guests){
        let idx = invites.indexOf(guest);
        if(idx >= 0){
            invites.splice(idx,1);
        }
    }

    console.log(invites.length);
    let regularInvites = [];

    for(let invite of invites){
        if(Number.isNaN(Number(invite[0]))){
            regularInvites.push(invite);
        }
        else {
            console.log(invite);
        }
    }

    for(let invite of regularInvites){
        console.log(invite);
    }
}

party([
    '7IK9Yo0h', 
    '9NoBUajQ', 
    'Ce8vwPmE', 
    'SVQXQCbc', 
    'tSzE5t0p', 
    'PARTY', 
    '9NoBUajQ', 
    'Ce8vwPmE', 
    'SVQXQCbc']);

/*
2
7IK9Yo0h
tSzE5t0p
*/

party([
    'm8rfQBvl', 
    'fc1oZCE0', 
    'UgffRkOn', 
    '7ugX7bm0', 
    '9CQBGUeJ', 
    '2FQZT3uC', 
    'dziNz78I', 
    'mdSGyQCJ', 
    'LjcVpmDL', 
    'fPXNHpm1', 
    'HTTbwRmM', 
    'B5yTkMQi', 
    '8N0FThqG', 
    'xys2FYzn', 
    'MDzcM9ZK', 
    'PARTY', 
    '2FQZT3uC', 
    'dziNz78I', 
    'mdSGyQCJ', 
    'LjcVpmDL', 
    'fPXNHpm1', 
    'HTTbwRmM', 
    'B5yTkMQi', 
    '8N0FThqG', 
    'm8rfQBvl', 
    'fc1oZCE0', 
    'UgffRkOn', 
    '7ugX7bm0', 
    '9CQBGUeJ']);
/*
2
xys2FYzn
MDzcM9ZK
*/
