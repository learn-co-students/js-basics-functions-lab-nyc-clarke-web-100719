// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location)
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264
}

function distanceTravelledInFeet(start,end) {
    return Math.abs(start-end)*264
}

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start,end);

    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return .02 * (distance-400);
    }
    else if (distance < 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }

}