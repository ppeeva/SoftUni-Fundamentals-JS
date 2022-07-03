function solve(arr) {
    let maxSequence = [];
    let currentSequence = [];

    if(arr.length == 1){
        console.log(arr[0]);
        return;
    }
    
    for (let i = 0; i < arr.length - 1; i++) { 
        currentSequence = [];
        currentSequence.push(arr[i]);

        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                currentSequence.push(arr[j]);
            }
            else {
                break;
            }
        }

        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }

    console.log(maxSequence.join(' '));
}

solve([]);
//

solve([1, 2, 3]);
//1

solve([2]);
//2

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//2 2 2

solve([1, 1, 1, 2, 3, 1, 3, 3]);
//1 1 1

solve([4, 4, 4, 4]);
//4 4 4 4

solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
//1