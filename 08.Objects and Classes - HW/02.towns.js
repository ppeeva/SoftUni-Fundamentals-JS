function parseTowns(input){
    let towns = [];

    for(let row of input){
        let data = row.split(' | ');
        let town = {town: data[0], latitude: Number(data[1]).toFixed(2), longitude: Number(data[2]).toFixed(2)};
        towns.push(town);
    }

    for(let town of towns){
        console.log(town);
    }
}

parseTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
/*
{town: 'Sofia', latitude: '42.70', longitude: '23.33'}
{town: 'Beijing', latitude: '39.91', longitude: '116.36'}
*/

parseTowns(['Plovdiv | 136.45 | 812.575']);
/*
{town: 'Plovdiv', latitude: '136.45', longitude: '812.58'}
*/
