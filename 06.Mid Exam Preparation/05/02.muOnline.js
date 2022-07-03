function solve(input) {
    let maxHealth = 100;
    let health = maxHealth;
    let bitcoins = 0;
    let rooms = input.split('|');

    for (let i = 0; i < rooms.length; i++) {
        let commands = rooms[i].split(' ');

        if (commands[0] == 'potion') {
            let amount = Number(commands[1]);
            let remainingTillMax = maxHealth - health;
            amount = amount > remainingTillMax ? remainingTillMax : amount;
            console.log(`You healed for ${amount} hp.`);
            health += amount;
            console.log(`Current health: ${health} hp.`);

        } else if (commands[0] == 'chest') {
            let newBitcoins = Number(commands[1]);
            console.log(`You found ${newBitcoins} bitcoins.`);
            bitcoins += newBitcoins;
        }
        else {
            let attack = Number(commands[1]);
            health -= attack;
            if (health > 0) {
                console.log(`You slayed ${commands[0]}.`);
            }
            else {
                console.log(`You died! Killed by ${commands[0]}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}


solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
/*
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 bitcoins.
You died! Killed by boss.
Best room: 6
*/

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
/*
You slayed cat.
You healed for 10 hp.
Current health: 100 hp.
You slayed orc.
You found 10 bitcoins.
You slayed snake.
You found 110 bitcoins.
You've made it!
Bitcoins: 120
Health: 65
*/