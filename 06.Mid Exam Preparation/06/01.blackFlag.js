function solve(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 == 0) {
            totalPlunder += 0.5 * dailyPlunder;
        }
        
        if (i % 5 == 0) {
            totalPlunder -= 0.3*totalPlunder;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
    else {
        let percentage = expectedPlunder > 0 ? 100 * (totalPlunder / expectedPlunder) : 0;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve(["100000", "0", "10.0"]);
//Collected only 0.00% of the plunder.

solve(["5", "40", "100"]);
//Ahoy! 154.00 plunder gained.

solve(["10", "20", "380"]);
//Collected only 36.29% of the plunder.

