console.log("script start");
function isNumNaN(num){

    if(isNaN(num)){
        throw new Error("Invalid input");
    }

}

function showNumbers(num1, num2){
    for(let i = num1; i<= num2; i++){
        console.log(i);
    }    
}

let num1 = +prompt("Enter the lowest number");
let num2 = +prompt("Enter the highest number");

isNumNaN(num1);
isNumNaN(num2);

showNumbers(num1, num2);

console.log("script end")