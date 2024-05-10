const Vehicle = require('./vehicle');
const Bicycle = require('./bicycle');


const myVehicle = new Vehicle();
console.log("Vehicle:");
console.log("Color:", myVehicle.color);
console.log("Number of Wheels:", myVehicle.wheels);
console.log("Horn:", myVehicle.horn);
myVehicle.honkHorn();

console.log("\n");


const myBicycle = new Bicycle();
console.log("Bicycle:");
console.log("Color:", myBicycle.color);
console.log("Number of Wheels:", myBicycle.wheels);
console.log("Horn:", myBicycle.horn);
myBicycle.honkHorn();
