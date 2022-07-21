function printResources(input) {
    let resources = {};

    for (let i = 0; i < input.length - 1; i += 2) {
        if(resources.hasOwnProperty(input[i]) == false){
            resources[input[i]] = 0;
        }

        resources[input[i]] += Number(input[i+1]);
    }

    for(let key of Object.keys(resources)){
        console.log(key, '->', resources[key]);
    }
}

printResources([
    'Gold', '155',
    'Silver', '10',
    'Copper', '17']);

/*
Gold -> 155 
Silver -> 10 
Copper -> 17
*/

printResources([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15']);

/*
gold -> 170 
silver -> 10 
copper -> 17
*/
