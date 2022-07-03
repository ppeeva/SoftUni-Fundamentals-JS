function solve(arr) {
    arr = arr.sort((a, b) => {
        let result = a.length < b.length 
        ? -1 
        : (a.length > b.length 
            ? 1 
            : a.localeCompare(b));
        return result;
    });

    console.log(arr.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);
/*
beta
alpha
gamma
*/

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
/*
Jack
Isacc
George
Theodor
Harrison
*/
