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