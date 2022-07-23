function solve(input) {
    let line = input.shift();
    let pattern = /%([A-Z][a-z]+)%[^|$%.0-9]*<(\w+)>[^|$%.0-9]*\|(\d+)\|[^|$%.0-9]*(\d+\.?\d+)\$/;
    let income = 0;

    while (line != 'end of shift') {
        let match = line.match(pattern);
        if (match != null) {
            let name = match[1];
            let product = match[2];
            let cnt = Number(match[3]);
            let price = Number(match[4]);
            let total = price*cnt;
            income += total;

            console.log(`${name}: ${product} - ${total.toFixed(2)}`);
        }

        line = input.shift();
    }

    console.log('Total income:', income.toFixed(2));
}

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
/*
George: Croissant - 20.60
Peter: Gum - 1.30
Maria: Cola - 2.40
Total income: 24.30
*/

console.log('----');

solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);
/*
Valid: Valid - 200.00
Total income: 200.00
*/