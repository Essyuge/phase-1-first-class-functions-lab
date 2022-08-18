// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  const slicedArray = drivers.slice(0, 2);
  return slicedArray;
}

function returnLastTwoDrivers(drivers) {
  const slicedArray = drivers.slice(-2);
  return slicedArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a) {
  const innerFunction = function (b) {
    return a * b;
  };
  return innerFunction;
}

function fareDoubler(a) {
  return a * 2;
}
function fareTripler(a) {
  return a * 3;
}
function selectDifferentDrivers(drivers, callback) {
  const slicedArray = callback(drivers);
  return slicedArray;
}
