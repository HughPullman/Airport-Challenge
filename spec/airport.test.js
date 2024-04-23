import airport from "../src/airport.js";
import { assertEqual } from "./testing-framework.js";


const cleanUp = () => {
    airport.capacity = 10;
    expected = undefined;
    actual = undefined;
    result = undefined;
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