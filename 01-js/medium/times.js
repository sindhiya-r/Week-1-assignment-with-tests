/*
    Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sumFrom1ToN(n){
    let sum = 0 ;

    for(var i=1; i<n; i++){
        sum+=i;
    }
   
}

function calculateTime(n) {
    
    const startTime = new Date().getTime();
    sumFrom1ToN(n);
    const endTime = new Date().getTime();

    const duration = (endTime-startTime)/1000;

    return duration;
}

console.log("Time taken for sum from 1 to 100: " + calculateTime(100) + " seconds");
console.log("Time taken for sum from 1 to 100000: " + calculateTime(100000) + " seconds");
console.log("Time taken for sum from 1 to 1000000000: " + calculateTime(1000000000) + " seconds");
