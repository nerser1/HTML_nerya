
function getAvgHp(){
    let sum = 0;
    let temp = 0;
    let avg = 0;
    for (let index = 0; index < carsForRental.length; index++) {
        const element = carsForRental[index];
        sum += element.Horsepower;
        temp++;
    }
    avg = sum/temp;
    return avg;
}

console.log(getAvgHp());