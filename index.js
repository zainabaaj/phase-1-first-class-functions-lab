// Code your solution in this file!
function returnFirstTwoDrivers(driversArray) {
    return driversArray.slice(0, 2);
}

function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
}

