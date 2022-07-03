function solve(input) {
    let houses = input.shift(0).split('@').map(Number);
    let commandLine = input.shift(0);
    let position = 0;

    while(commandLine != 'Love!'){
        let commands = commandLine.split(' ');
        let length = Number(commands[1]);
        position += length;
        position = position >= houses.length ? 0 : position;
        
        if(houses[position] == 0){
            console.log(`Place ${position} already had Valentine's day.`);
        }
        else {
            houses[position] -= 2;
            if(houses[position] == 0){
                console.log(`Place ${position} has Valentine's day.`);
            }
        }

        commandLine = input.shift(0);
    }

    console.log(`Cupid's last position was ${position}.`);
    let missedValentine = houses.filter(x => x > 0).length;
    if(missedValentine > 0){
        console.log(`Cupid has failed ${missedValentine} places.`);
    }
    else {
        console.log("Mission was successful.");
    }

}


solve(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
/*
Place 3 has Valentine's day.
Cupid's last position was 3.
Cupid has failed 3 places.
*/

solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);
/*
Place 2 has Valentine's day.
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 1.
Cupid has failed 1 places.
*/