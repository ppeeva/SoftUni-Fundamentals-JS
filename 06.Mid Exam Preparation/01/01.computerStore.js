function solve(input) {
    let priceStr = input.shift(0);
    let partsSum = 0;

    while (priceStr != 'special' && priceStr != 'regular') {
        let price = Number(priceStr);
        priceStr = input.shift(0);
        if (price < 0) {
            console.log("Invalid price!");
            continue;
        }
        partsSum += price;
    }

    if(partsSum == 0){
        console.log("Invalid order!");
    }
    else {
        let taxes = 0.2 * partsSum;
        let totalWithTaxes = partsSum + taxes;
    
        if (priceStr == "special") {
            totalWithTaxes *= 0.9;
        }
    
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${partsSum.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalWithTaxes.toFixed(2)}$`);
    }
}

solve(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
/*
Congratulations you've just bought a new computer!
Price without taxes: 1737.36$
Taxes: 347.47$
-----------
Total price: 1876.35$
*/

solve(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
/*
Invalid price!
Invalid price!
Congratulations you've just bought a new computer!
Price without taxes: 1544.96$
Taxes: 308.99$
-----------
Total price: 1853.95$
*/

solve(['regular']);
//Invalid order!
