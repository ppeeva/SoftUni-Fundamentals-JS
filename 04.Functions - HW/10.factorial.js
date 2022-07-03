function printFactorialDivision(num1, num2) {
    let factorial1 = getFactorial(num1);
    let factorial2 = getFactorial(num2);
    let result = factorial1/factorial2;

    return console.log(`${result.toFixed(2)}`);

    function getFactorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        return result;
    }
}

printFactorialDivision(5, 2);
//60.00

printFactorialDivision(6, 2);
//360.00

