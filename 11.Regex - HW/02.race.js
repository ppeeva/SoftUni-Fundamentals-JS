function solve(input) {
    let participants = input.shift().split(', ');
    let results = {};
    participants.forEach(x => results[x] = 0);

    let line = input.shift();

    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    while (line != "end of race") {
        let letterMatch = line.match(letterPattern);

        if (letterMatch != null) {
            let name = letterMatch.join('');

            if (results.hasOwnProperty(name) == true) {
                let digitMatch = line.match(digitPattern);

                if (digitMatch != null) {
                    let km = 0;
                    for (let digit of digitMatch.map(Number)) {
                        km += digit;
                    }
                    results[name] += km;
                }
            }
        }

        line = input.shift();
    }

    let sorted = Object.entries(results);
    sorted.sort((a, b) => b[1] - a[1]);

    console.log('1st place:', sorted[0][0]);
    console.log('2nd place:', sorted[1][0]);
    console.log('3rd place:', sorted[2][0]);
}

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
/*
1st place: George
2nd place: Peter
3rd place: Tom
*/

console.log('----');

solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);
/*
1st place: Michonne
2nd place: Ronald
3rd place: Bill
*/

