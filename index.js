// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    let calc;
    calc = Math.abs(num1 - num2);
    calc = calc * 264;
    return calc;
}

function calculatesFarePrice(num1, num2) {
    let calc;
    let fare;
    calc = distanceTravelledInFeet(num1, num2);
    if (calc < 400) {
       return fare = 0;
    } else if (calc > 400 && calc < 2000) {
        return fare = (calc - 400) * 0.02;
    } else if (calc > 2000 && calc < 2500) {
        return fare = 25;
    } else {
        return fare = 'cannot travel that far';
    }   
}