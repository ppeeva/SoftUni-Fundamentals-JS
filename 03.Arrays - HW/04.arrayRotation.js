function solve(arr, rotations) {
    if (rotations == arr.length) {
        console.log(arr.join(' '));
        return;
    }

    if (rotations > arr.length) {
        let times = Math.floor(rotations / arr.length);
        rotations -= times*arr.length;
    }

    let result = [];
    let count = arr.length;
    let currentIndex = rotations;

    while (count > 0) {
        if (currentIndex >= arr.length) {
            currentIndex -= arr.length;
        }
        result.push(arr[currentIndex]);
        currentIndex++;
        count--;
    }

    console.log(result.join(' '));
}

solve([51], 5);
//51

solve([51, 47, 32, 61, 21], 2);
//32 61 21 51 47

solve([32, 21, 61, 1], 4);
//32 21 61 1

solve([2, 4, 15, 31], 5);
//4 15 31 2