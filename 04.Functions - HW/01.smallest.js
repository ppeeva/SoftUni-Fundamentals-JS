function getSmallestNumber(num1, num2, num3) {
    let smallest = num1;
    if(num2 < smallest){
        smallest = num2;
    }
    if(num3 < smallest){
        smallest = num3;
    }

    return smallest;
}

console.log(getSmallestNumber(2, 5, 3));
//2

console.log(getSmallestNumber(600, 342, 123));
//123

console.log(getSmallestNumber(25, 21, 4));
//4

console.log(getSmallestNumber(2, 2, 2));
//2
