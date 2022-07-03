function solve(input) {
    let pirateShip = input.shift(0).split('>').map(Number);
    let warShip = input.shift(0).split('>').map(Number);
    let maxHealth = Number(input.shift(0));

    let commandLine = input.shift(0);
    while(commandLine != 'Retire'){
        let commands = commandLine.split(' ');
        switch(commands[0]){
            case 'Fire':
                let index = Number(commands[1]);
                if(index >= 0 && index < warShip.length){
                    let damage = Number(commands[2]);
                    warShip[index] -= damage;
                    if(warShip[index] <= 0){
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(commands[1]);
                let endIndex = Number(commands[2]);

                if(startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length){
                    let defendDamage = Number(commands[3]);
                    for(let i = startIndex; i <= endIndex; i ++){
                        pirateShip[i] -= defendDamage;
                        if(pirateShip[i] <= 0){
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                let repairIndex = Number(commands[1]);
                if(repairIndex >= 0 && repairIndex < pirateShip.length){
                    let health = Number(commands[2]);
                    pirateShip[repairIndex] += health;
                    if(pirateShip[repairIndex] > maxHealth){
                        pirateShip[repairIndex] = maxHealth;
                    }
                }
                break;
            case 'Status':
                let warningLevel = 0.2*maxHealth;
                let toBeWarned = pirateShip.filter(x => x < warningLevel);
                console.log(`${toBeWarned.length} sections need repair.`);
                break;
        }

        commandLine = input.shift(0);
    }

    let pirateShipSum = 0;
    for(let section of pirateShip){
        pirateShipSum += section;
    }

    let warshipSum = 0;
    for(let section of warShip){
        warshipSum += section;
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}

solve(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);
/*
2 sections need repair.
Pirate ship status: 135
Warship status: 205
*/

solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);
/*
3 sections need repair.
You lost! The pirate ship has sunken.
*/

