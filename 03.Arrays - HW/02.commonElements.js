function solve(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        if(secondArr.includes(firstArr[i])){
            console.log(firstArr[i]);
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
/*
hello
4
*/

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
/*
o
i
*/