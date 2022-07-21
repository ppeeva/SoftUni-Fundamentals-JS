function extractOdd(input) {
    words = input.split(' ');
    occurrences = new Map();
    for (let word of words) {
        word = word.toLowerCase();
        let cnt = 1;
        if (occurrences.has(word)) {
            cnt = occurrences.get(word) + 1;
        } 
        occurrences.set(word, cnt);
    }

    let filtered = [];
    for(let word of occurrences.keys()){
        if(occurrences.get(word) % 2 == 1){
            filtered.push(word);
        }
    }
    console.log(filtered.join(' '));
}

extractOdd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
//c# php 1 5

extractOdd('Cake IS SWEET is Soft CAKE sweet Food');
//soft food
