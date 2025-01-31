let diameter = Number(prompt("Enter the diameter of the circle: "));
let depth = Number(prompt("Enter the depth of the cylinder: "));
let volume = Math.PI * Math.pow(diameter / 2, 2) * depth;
console.log(`The volume of the cylinder is ${volume.toFixed(0)}`);