function solve(input) {
    let first = input.substring(0, input.length / 2);
    let second = input.substring(input.length / 2);

    console.log(Array.from(first).reverse().join(''));
    console.log(Array.from(second).reverse().join(''));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
/*
ThisIsDifficult
ThisIsSoAmazing
*/

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
/*
IBetYouCantDoThis
ImSoGoodAtThisJob
*/