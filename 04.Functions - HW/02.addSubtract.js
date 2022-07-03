function subtract(num1, num2, num3) {
    return sum(num1, num2) - num3;

    function sum(num1, num2){
        return num1 + num2;
    }
}

console.log(subtract(23, 6, 10));
//19

console.log(subtract(1, 17, 30));
//-12

console.log(subtract(42, 58, 100));
//0
