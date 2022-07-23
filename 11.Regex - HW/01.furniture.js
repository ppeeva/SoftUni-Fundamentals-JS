function solve(input) {
    let line = input.shift();
    let totalCost = 0;
    let furniture = [];

    let pattern = />>([A-Z][A-Za-z]+)<<(\d+\.?\d*)!(\d+)/;

    while (line != 'Purchase') {
        let match = line.match(pattern);
        if (match != null) {
            furniture.push(match[1]);
            let price = Number(match[2]);
            let cnt = Number(match[3]);
            totalCost += price*cnt;
        }

        line = input.shift();
    }

    console.log('Bought furniture:');
    for(let item of furniture){
        console.log(item);
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);

console.log('-----');

solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);

console.log('-----');

solve(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']);