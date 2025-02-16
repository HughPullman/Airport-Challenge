import airport from "../src/airport.js";
import { assertEqual } from "./testing-framework.js";


const cleanUp = () => {
    airport.capacity = 10;
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport.airportPlanes = [];
}


//User Story 1
console.log('Test 1');
console.log("==================");
console.log("Function returns the correct capacity of the airport.");
console.log("==================");

//Arrange
let expected = airport.capacity;
let actual, result;

//Act
actual = airport.checkCapacity();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

//User story 2

console.log('Test 2');
console.log("==================");
console.log("Function changed capacity to value given.");
console.log("==================");

//Arrange
let newCapacity = 7;
expected = newCapacity;

//Act
airport.setCapacity(newCapacity);
actual = airport.capacity;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 3');
console.log("==================");
console.log("Capacity cannot be set bellow 0");
console.log("==================");

//Arrange
newCapacity = -7;
expected = airport.capacity;

//Act
airport.setCapacity(newCapacity);
actual = airport.capacity;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 4');
console.log("==================");
console.log("New capacity input has to be an integer");
console.log("==================");

//Arrange
newCapacity = null;
expected = airport.capacity;

//Act
airport.setCapacity(newCapacity);
actual = airport.capacity;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 5');
console.log("==================");
console.log("isFull returns false if the airport isn't full");
console.log("==================");

//Arrange
expected = false;

//Act
actual = airport.isFull();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 6');
console.log("==================");
console.log("isFull returns true if the airport is full");
console.log("==================");

//Arrange
expected = true;

//Act
airport.addPlane(1)
airport.addPlane(2)
airport.addPlane(3)
airport.addPlane(4)
airport.addPlane(5)
airport.addPlane(6)
airport.addPlane(7)
airport.addPlane(8)
airport.addPlane(9)
airport.addPlane(10)
actual = airport.isFull();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 7');
console.log("==================");
console.log("addPlane increases airportPlanes length by 1");
console.log("==================");

//Arrange
expected = airport.airportPlanes.length + 1;

//Act
airport.addPlane("Test Plane")
actual = airport.airportPlanes.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 8');
console.log("==================");
console.log("addPlane doesn't increase length if there is not capacity");
console.log("==================");

//Arrange
expected = airport.airportPlanes.length;
airport.setCapacity(0);
//Act
airport.addPlane("Test Plane")
actual = airport.airportPlanes.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 9');
console.log("==================");
console.log("The plane passed to addPlane is in the array after running");
console.log("==================");

//Arrange
expected = true;
let testPlane = "Test Plane"
//Act
airport.addPlane(testPlane)
actual = airport.airportPlanes.includes(testPlane);

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 10');
console.log("==================");
console.log("add plane cannot take a null input");
console.log("==================");

//Arrange
expected = airport.airportPlanes.length;
//Act
airport.addPlane(null)
actual = airport.airportPlanes.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 11');
console.log("==================");
console.log("checkPlane returns true if the plane is at the airport");
console.log("==================");

//Arrange
expected = true;

//Act
airport.addPlane("Test Plane");
actual = airport.checkPlane("Test Plane");

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 12');
console.log("==================");
console.log("checkPlane returns false if the plane is not at the airport");
console.log("==================");

//Arrange
expected = false;

//Act
actual = airport.checkPlane("Test Plane");

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 13');
console.log("==================");
console.log("a plane cannot be added if it is already at the airport");
console.log("==================");

//Arrange
airport.addPlane("Test Plane")
expected = airport.airportPlanes.length;

//Act
airport.addPlane("Test Plane");
actual = airport.airportPlanes.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 14');
console.log("==================");
console.log("removePlane decreases the array length by 1");
console.log("==================");

//Arrange
airport.addPlane("Test Plane");
expected = airport.airportPlanes.length - 1;

//Act
airport.removePlane("Test Plane");
actual = airport.airportPlanes.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 15');
console.log("==================");
console.log("the plane passed to removePlane is no longer in airportPlanes");
console.log("==================");

//Arrange
airport.addPlane("Test Plane");
expected = false;

//Act
airport.removePlane("Test Plane");
actual = airport.airportPlanes.includes("Test Plane");

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 16');
console.log("==================");
console.log("removePlane doesn't decrease the array if the plane isn't there");
console.log("==================");

//Arrange
airport.addPlane("Test Plane");
expected = airport.airportPlanes.length;

//Act
airport.removePlane("Test Plane 2");
actual = airport.airportPlanes.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 17');
console.log("==================");
console.log("checkWeather returns true if its clear");
console.log("==================");

//Arrange
expected = true;

//Act
actual = airport.checkWeather();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 18');
console.log("==================");
console.log("setWeather changes weather to input");
console.log("==================");

//Arrange

expected = false;

//Act
airport.setWeather(false);
actual = airport.checkWeather();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 19');
console.log("==================");
console.log("setWeather can only be set to a Boolean");
console.log("==================");

//Arrange
expected = airport.weather;


//Act
airport.setWeather(5)
actual = airport.checkWeather();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 20');
console.log("==================");
console.log("plane cannot be instructed to land if weather is false");
console.log("==================");

//Arrange
airport.setWeather(false);
expected = "testPlane cannot land at this time";

//Act
actual = airport.addPlane("testPlane");

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

console.log('Test 21');
console.log("==================");
console.log("plane cannot be instructed to take off if weather is false");
console.log("==================");

//Arrange
airport.setWeather(true);
airport.addPlane("testPlane");
airport.setWeather(false);
expected = "testPlane cannot take off at this time";

//Act
actual = airport.removePlane("testPlane");

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

//------------------------------------------------------------------

