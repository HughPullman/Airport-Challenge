import airport from "./airport.js";
// Example day at the airport

console.log("Check the current capacity:");
console.log(airport.checkCapacity());

console.log("\nSet new capacity to allow for the days new conditions");
console.log(airport.setCapacity(6));

console.log("\nCheck if the airport is full:");
console.log(airport.isFull());

console.log("\nInstruct plane to land:");
console.log(airport.addPlane("British Airways 1"));

