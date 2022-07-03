function solve(input) {
    let commands = input.shift(0).split('||');
    let fuel = Number(input.shift(0));
    let ammunition = Number(input.shift(0));

    for (let commandLine of commands) {
        let commands = commandLine.split(' ');

        switch (commands[0]) {
            case 'Travel':
                let lightYears = Number(commands[1]);

                if (fuel >= lightYears) {
                    fuel -= lightYears;
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                }
                else {
                    console.log("Mission failed.");
                    return;
                }
                break;
            case 'Enemy':
                let armour = Number(commands[1]);

                if (ammunition >= armour) {
                    ammunition -= armour;
                    console.log(`An enemy with ${armour} armour is defeated.`);
                }
                else {
                    let neededFuel = 2 * armour;
                    if (fuel >= neededFuel) {
                        fuel -= neededFuel;
                        console.log(`An enemy with ${armour} armour is outmaneuvered.`);
                    }
                    else {
                        console.log("Mission failed.");
                        return;
                    }
                }
                break;
            case 'Repair':
                let repair = Number(commands[1]);
                fuel += repair;
                ammunition += repair * 2;
                console.log(`Ammunitions added: ${repair * 2}.`);
                console.log(`Fuel added: ${repair}.`);
                break;
            case 'Titan':
                console.log("You have reached Titan, all passengers are safe.");
                return;
        }
    }

}

solve(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
/*
The spaceship travelled 10 light-years.
An enemy with 30 armour is defeated.
Ammunitions added: 30.
Fuel added: 15.
You have reached Titan, all passengers are safe.
*/

solve(["Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan", "60", "100"]);
/*
The spaceship travelled 20 light-years.
An enemy with 50 armour is defeated.
An enemy with 50 armour is defeated.
An enemy with 10 armour is outmaneuvered.
Ammunitions added: 30.
Fuel added: 15.
Mission failed.
*/