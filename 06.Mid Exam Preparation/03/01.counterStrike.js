function solve(input) {
    let energy = Number(input.shift(0));
    let distance = input.shift(0);
    let wonBattles = 0;

    while(distance != 'End of battle'){
        let neededEnergy = Number(distance);
        if(energy >= neededEnergy){
            energy -= neededEnergy;
            wonBattles++;
            if(wonBattles % 3 == 0){
                energy += wonBattles;
            }
        }
        else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            return;
        }

        distance = input.shift(0);
    }

    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);

}

solve(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]);
//Not enough energy! Game ends with 7 won battles and 0 energy

solve(["200",
"54",
"14",
"28",
"13",
"End of battle"]);
//Won battles: 4. Energy left: 94

