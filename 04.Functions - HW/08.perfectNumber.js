function printIsPerfect(num) {
    let isPerfect = true;

    if (num < 0 || !Number.isInteger(num)) {
        isPerfect = false;
    }
    else {
        let sum = 0;

        for(let i = 1; i < num; i++){
            if(num % i == 0){
                sum += i;
            }
        }

        if(sum != num){
            isPerfect = false;
        }
    }

    if (isPerfect) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}

printIsPerfect(6);
//We have a perfect number!

printIsPerfect(28);
//We have a perfect number!

printIsPerfect(1236498);
//It's not so perfect.

