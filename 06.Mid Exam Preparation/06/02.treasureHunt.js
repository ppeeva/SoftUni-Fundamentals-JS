function solve(input) {
    let lootItems = input.shift(0).split('|');
    let commandLine = input.shift(0);

    while(commandLine != 'Yohoho!'){
        let commands = commandLine.split(' ');

        switch(commands[0]){
            case 'Loot':
                for(let i = 1; i < commands.length; i++){
                    if(!lootItems.includes(commands[i])){
                        lootItems.unshift(commands[i]);
                    }
                }
                break;
            case 'Drop':
                let index = Number(commands[1]);
                if(index >= 0 && index < lootItems.length){
                    let item = lootItems.splice(index, 1);
                    lootItems.push(item[0]);
                }
                break;
            case 'Steal':
                let count = Number(commands[1]);
                if(count > lootItems.length){
                    count = lootItems.length;
                }
                let stealedItems = lootItems.splice(-count);
                console.log(stealedItems.join(', '));
                break;
        }
        commandLine = input.shift(0);
    }

    if(lootItems.length == 0){
        console.log("Failed treasure hunt.");
    }
    else {
        let totalLength = 0;
        for(let item of lootItems){
            totalLength += item.length;
        }
        let averageGain = totalLength/lootItems.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

solve(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
/*
Medallion, Cup, Gold
Average treasure gain: 5.40 pirate credits.
*/

solve(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);
/*
Coal, Diamonds, Silver, Shotgun, Gold, Medals
Failed treasure hunt.
*/

