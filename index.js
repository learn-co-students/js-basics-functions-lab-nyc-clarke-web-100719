// Code your solution in this file!

function distanceFromHqInBlocks(destination) {
    return Math.abs(42 - destination);
}

function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let totalPrice;
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000 && distance < 2500) {
        totalPrice = 25;
    } else if (distance < 400) {
        totalPrice = 0;
    } else {
        totalPrice = (distance - 400) * .02;
    } 
    return totalPrice;
}