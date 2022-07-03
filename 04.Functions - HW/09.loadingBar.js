function printLoadingBar(num) {
    let progress = new Array(10).fill('.');
    let end = num / 10;

    for (let i = 1; i <= end; i++) {
        progress[i - 1] = '%';
    }

    if(end == 10){
        console.log('100% Complete!');
        console.log(`[${progress.join('')}]`); 
    }
    else {
        console.log(`${num}% [${progress.join('')}]`); 
        console.log('Still loading...');
    }
}

printLoadingBar(30);
/*
30% [%%%.......]
Still loading...
*/

printLoadingBar(50);
/*
50% [%%%%%.....]
Still loading...
*/

printLoadingBar(100);
/*
100% Complete!
[%%%%%%%%%%]
*/

