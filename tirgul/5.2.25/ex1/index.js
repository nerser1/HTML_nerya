console.log("script start");

function addMoreKm(km){
    const moreKm = +prompt("enter how mach more km the car drive from the last enter:");
    if(isNaN(moreKm)){
        return;
    }
    return (km + moreKm);

}

const car = {
    type: "mazda",
    engine: "1600",
    color: "black",
    doors: 4,
    model: 6,
    year: 2020,
    km: 80000
}

console.log(car.color);
car.color = "red";
console.log(car);
car.km = addMoreKm(car.km);
console.log(car);
console.log("script end");
