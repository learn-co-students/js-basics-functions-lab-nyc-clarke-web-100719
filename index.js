// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    if (pickupLocation === hqLocation) {
        return 1;
    } else if (hqLocation > pickupLocation) {
        return hqLocation - pickupLocation;
    } else {
        return pickupLocation - hqLocation; // 8 blocks
    }
}

function distanceFromHqInFeet(distance) {
    let distanceInBlocks = distanceFromHqInBlocks(distance); 
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
    return ((distanceInBlocks) * 264);
}

function distanceTravelledInFeet(start, end) {
    let feet = Math.abs(((start - end) * 264))
    return feet;
}

function calculatesFarePrice(start, destination) {
    let feet = Math.abs(((start - destination) * 264));
    if (feet <= 400) {
        return 0;
    } else if (feet >= 401 && feet <= 1999) {
        return ((feet - 400) * 0.02);
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}

