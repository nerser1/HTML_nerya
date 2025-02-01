let name = prompt("Enter your name: ");
let salary = prompt("Enter your salary: ");

if (1.1*salary > 6000){
    console.log(`Dear ${name}, your new salary is ${1.05*salary} `);
} else {
    console.log(`Dear ${name}, your new salary is ${1.1*salary} `);
}