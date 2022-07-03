function solve(input) {
    let studentsCount = Number(input.shift(0));
    let totalLectures = Number(input.shift(1));
    let addBonus = Number(input.shift(2));
    let attendances = input.map(Number);
    let bonuses = attendances.map(x => x / totalLectures * (5 + addBonus));

    let maxBonus = 0;
    let attendedLectures = 0;
    for (let i = 0; i < bonuses.length; i++) {
        if (bonuses[i] > maxBonus) {
            maxBonus = bonuses[i];
            attendedLectures = attendances[i];
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendedLectures} lectures.`);
}


solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
/*
Max Bonus: 34.
The student has attended 24 lectures.
*/

solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);
/*
Max Bonus: 18.
The student has attended 28 lectures.
*/