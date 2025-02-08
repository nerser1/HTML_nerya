
function getCarByOrigin(origin, Miles_per_Gallon){
    let result = [];
    for (let index = 0; index < carsForRental.length; index++) {
        const element = carsForRental[index];
        if (element.Origin == origin && element.Miles_per_Gallon >= Miles_per_Gallon){
            result.push(element);
        }
        
    }
    return result;
}

console.log(getCarByOrigin("USA", 18));