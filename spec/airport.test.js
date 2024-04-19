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

