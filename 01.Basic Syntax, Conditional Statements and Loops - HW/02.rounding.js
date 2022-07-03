
function solve(num, precision) {
    precision = precision > 15 ? 15 : precision;
    let result = num.toFixed(precision);
    console.log(parseFloat(result));
}

solve(3.1415926535897932384626433832795,2);
// 3.14

solve(10.5,3);
// 10.5