function solve(input) {
    let wagons = input.shift().split(' ').map(Number);
    let max = Number(input.shift());

    for (let command of input) {
        let commandArray = command.split(' ');

        if (commandArray.length == 1) {
            let newPassengers = Number(commandArray[0]);
            for(let i = 0; i < wagons.length; i ++){
                if(wagons[i] + newPassengers <= max){
                    wagons[i] += newPassengers;
                    break;
                }
            }
        }
        else if (commandArray.length == 2){
            let newPassengers = Number(commandArray[1]);
            wagons.push(newPassengers);
        }
    }

    console.log(wagons.join(' '));
}

solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
//72 54 21 12 4 75 23 10 0

solve(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
//10 10 10 10 10 10 10
