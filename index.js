// Code your solution in this file!
// Function that returns the first two drivers from an array
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// Function that returns the last two drivers from an array
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Array containing both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that takes a multiplier and returns a function that multiplies a fare
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

// Doubles the fare using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Triples the fare using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers based on the function passed as argument
const selectDifferentDrivers = function (arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers);
};

// Test cases (for debugging)
const drivers = ["Alice", "Bob", "Charlie", "David"];
console.log(returnFirstTwoDrivers(drivers)); // ["Alice", "Bob"]
console.log(returnLastTwoDrivers(drivers)); // ["Charlie", "David"]
console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ["Alice", "Bob"]
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ["Charlie", "David"]
