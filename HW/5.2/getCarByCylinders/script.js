
function getCarByProperty(num, propertys){
    let result =[];
    for (let index = 0; index < carsForRental.length; index++) {
        const element = carsForRental[index];
        if (element[propertys] >= num){
            result.push(element);
        }
    }
    return result;
}

console.log(getCarByProperty(8, "Cylinders"));