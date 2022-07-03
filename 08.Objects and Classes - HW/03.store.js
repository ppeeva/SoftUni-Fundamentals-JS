function processStore(products, orders){
    let store = {};

    for(let i = 0; i < products.length; i += 2){
        store[products[i]] = Number(products[i+1]);
    }

    for(let i = 0; i < orders.length; i += 2){
        if(store[orders[i]] != undefined){
            store[orders[i]] += Number(orders[i+1]);
        }
        else {
            store[orders[i]] = Number(orders[i+1]);
        }
    }

    for(let product of Object.entries(store)){
        console.log(`${product[0]} -> ${product[1]}`);
    }
}

processStore(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
/*
Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70
*/
console.log('-------------------');

processStore([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], 
    [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);
/*
Salt -> 2
Fanta -> 4
Apple -> 21
Water -> 4
Juice -> 5
Sugar -> 44
Oil -> 12
Tomatoes -> 7
Bananas -> 30
*/