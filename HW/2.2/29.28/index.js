function avgTemp(sumTemp,numOfDay){
    return (sumTemp/numOfDay);
}
function isHot(temp, avg, j){
    if (temp > avg){
        console.log(`The temperature in ${j}/07/2001 is more then average temperature in july 2000! (${temp})`);
        return;
    }
}

console.log("script start");
let avgTemp2000 = 0;
let numOfDaysJuly = 30;
let dayHot;
let sumTemp = 0;

for (let i = 1; i <= numOfDaysJuly; i++){
    const temp = +prompt(`insert temperature in ${i}/07/2000:`);
    sumTemp += temp;
}
avgTemp2000 = avgTemp(sumTemp,numOfDaysJuly);
console.log(`The average temperature in july 2000 is: ${avgTemp2000}`);

for(let j = 1; j <= numOfDaysJuly; j++){
    const temp = +prompt(`insert temperature in ${j}/07/2001:`);
    isHot(temp, avgTemp2000, j);
}
console.log("script end");
