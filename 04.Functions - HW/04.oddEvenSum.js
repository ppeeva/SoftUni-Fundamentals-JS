function sum(num) {
    let oddSum = 0;
    let evenSum = 0;
    let digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        let digit = Number(digits[i]);
        if (digit % 2 == 0) {
            evenSum += digit;
        }
        else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sum(1000435);
//Odd sum = 9, Even sum = 4

sum(3495892137259234);
//Odd sum = 54, Even sum = 22

