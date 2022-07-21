function findOccurrences(input) {
    let wordsToFind = input.shift().split(' ');
    let occurrences = {};
    wordsToFind.forEach(x => occurrences[x] = 0);
    input.forEach(x => {
        if (occurrences.hasOwnProperty(x)) {
            occurrences[x]++;
        }
    })

    let sorted = Object.entries(occurrences);
    sorted.sort((a,b) => b[1] - a[1]);

    for(let [word, count] of sorted){
        console.log(word, '-', count);
    }
}

findOccurrences(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
/*
this - 3
sentence - 2
*/

findOccurrences(['is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
/*
the - 3
is - 1
*/