import airport from "./airport.js";
// Example day at the airport

console.log("Check the current capacity:");
console.log(airport.checkCapacity());

console.log("\n=======================================");

console.log("\nSet new capacity to allow for the days new conditions");
console.log(airport.setCapacity(6));

console.log("\n=======================================");

console.log("\nCheck if the airport is full:");
console.log(airport.isFull());

console.log("\n=======================================");

console.log("\nInstruct plane to land:");
console.log(airport.addPlane("British Airways 1"));
console.log(airport.addPlane("RyanAir 3"));
console.log(`Planes at airport: ${airport.airportPlanes}`);

console.log("\n=======================================");

console.log("\nCheck if plane is at the airport");
console.log(airport.checkPlane("British Airways 1"));
console.log(airport.checkPlane("Easy Jet 1"));

console.log("\n=======================================");

console.log("\nInstruct Plane to take off");
console.log(airport.removePlane("British Airways 1"));
console.log(`Planes at airport: ${airport.airportPlanes}`);

console.log("\n=======================================");

console.log("\nSet random weather");
console.log("Randomizing...");

let randomValue = Math.random();
let weather, newWeather;
if (randomValue < 0.5) {
    newWeather = false;
    weather = "Stormy"
} else {
    newWeather = true;
    weather = "Clear"
}
console.log(`Weather is ${weather} today, setting weather...`);
airport.setWeather(newWeather);

console.log("\n=======================================");

console.log("\nAttempt to land plane");
console.log(airport.addPlane("RyanAir 4"));

console.log("\n=======================================");

console.log("\nAttempt to take off plane");
console.log(airport.removePlane("RyanAir 3"));