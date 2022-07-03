function solve(input) {
    let numbers = input.split(' ').map(Number);
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    let average = sum / numbers.length;
    let greaterNumbers = numbers.filter(x => x > average);
    
    if(greaterNumbers.length == 0){
        console.log('No');
    }
    else {
        greaterNumbers.sort((a, b) => b - a);
        let top5 = greaterNumbers.length < 5 ? greaterNumbers.slice() : greaterNumbers.slice(0,5);
        console.log(top5.join(' '));
    }
}

solve('10 20 30 40 50');
//50 40

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
//60 60 51 50 50

solve('1');
//No

solve('-1 -2 -3 -4 -5 -6');
//-1 -2 -3

