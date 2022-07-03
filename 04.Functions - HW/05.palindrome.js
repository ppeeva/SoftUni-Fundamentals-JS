function checkPalindromes(arr) {
    for(let num of arr){
        console.log(isPalindrome(num));
    }

    function isPalindrome(num) {
        let oneWay = num.toString();
        let otherWay = num.toString().split('').reverse().join('').toString();
        return oneWay == otherWay;
    }
}

checkPalindromes([123,323,421,121]);
/*
false
true
false
true
*/

console.log('-----------');

checkPalindromes([32,2,232,1010]);
/*
false
true
true
false
*/

