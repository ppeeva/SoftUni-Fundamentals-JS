function solve(input) {
    let days = Number(input.shift(0));
    let players = Number(input.shift(0));
    let energy = Number(input.shift(0));
    let waterPerDayPerPerson = Number(input.shift(0));
    let water = waterPerDayPerPerson * days * players;
    let foodPerDayPerPerson = Number(input.shift(0));
    let food = foodPerDayPerPerson * days * players;

    for (let i = 1; i <= days; i++) {
        let energyLoss = Number(input.shift(0));
        energy -= energyLoss;   
        
        if (energy <= 0) {
            break;
        }

        if (i % 2 == 0) {
            energy *= 1.05;
            water *= 0.7;
        }

        if (i % 3 == 0) {
            food -= (food / players);
            energy *= 1.1;
        }
    }

    if(energy > 0){
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
    else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    }
}

solve(["10", "7", "5035.5", "11.3", "7.2",
    "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]);
// You are ready for the quest. You will be left with - 658.72 energy!

solve(["12", "6", "4430", "9.8", "5.5",
    "620.3", "840.2", "960.1", "220", "340", "674", "365", "345.5", "212", "412.12", "258", "496"]);
// You will run out of energy. You will be left with 229.17 food and 118.59 water.