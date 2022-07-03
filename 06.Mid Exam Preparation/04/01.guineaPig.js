function solve(input) {
    let foodGrams = Number(input[0]) * 1000;
    let hayGrams = Number(input[1]) * 1000;
    let coverGrams = Number(input[2]) * 1000;
    let pigWeightGrams = Number(input[3]) * 1000;
    let days = 30;

    for (let i = 1; i <= days; i++) {
        foodGrams -= 300;

        if (i % 2 == 0) {
            hayGrams -= 0.05 * foodGrams;
        }

        if (i % 3 == 0) {
            coverGrams -= pigWeightGrams / 3;
        }

        if (foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) {
            break;
        }
    }

    if (foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams/1000).toFixed(2)}, Hay: ${(hayGrams/1000).toFixed(2)}, Cover: ${(coverGrams/1000).toFixed(2)}.`);
    }

}

solve(["10", "5", "5.2", "1"]);
//Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87.

solve(["1", "1.5", "3", "1.5"]);
//Merry must go to the pet store!

solve(["9", "5", "5.2", "1"]);
//Merry must go to the pet store!