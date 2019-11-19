// Code your solution in this file!
function distanceFromHqInBlocks(num){
    return Math.abs(42 - num);
};

function distanceFromHqInFeet(num){
    return Math.abs((42 - num)*264);
};

function distanceTravelledInFeet(startblock, endblock){
    return Math.abs((endblock - startblock)*264);
};

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400 && distance > 0) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return (.02*(distance-400));
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    };
};