function solve(base, increment) {
    let size = base;
    let step = 0;
    let stone = 0;
    let marble = 0
    let lapis = 0;
    let gold = 0;

    while (size > 0) {
        step++;

        if(size <= 2){
            gold += (size*size*increment);
            break;
        }

        let stoneBlocks = (size - 2) * (size - 2);
        stone += (stoneBlocks*increment);

        let outerBlocks = size * 4 - 4;
        if (step % 5 > 0) {
            marble += (outerBlocks * increment);
        }
        else {
            lapis += (outerBlocks * increment);
        }

        size -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step*increment)}`);
}

solve(11, 1);
/*
Stone required: 165
Marble required: 112
Lapis Lazuli required: 8
Gold required: 1
Final pyramid height: 6
*/

solve(11, 0.75);
/*
Stone required: 124
Marble required: 84
Lapis Lazuli required: 6
Gold required: 1
Final pyramid height: 4
*/

solve(12, 1);
/*
Stone required: 220
Marble required: 128
Lapis Lazuli required: 12
Gold required: 4
Final pyramid height: 6
*/

solve(23, 0.5);
/*
Stone required: 886
Marble required: 228
Lapis Lazuli required: 36
Gold required: 1
Final pyramid height: 6
*/
