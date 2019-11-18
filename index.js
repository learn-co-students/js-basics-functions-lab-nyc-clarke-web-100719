// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(starting_block, ending_block) {
    if (starting_block > ending_block) {
        var distanceInBlocks = starting_block - ending_block;
        return distanceInBlocks * 264;
    } else {
        var distanceInBlocks = ending_block - starting_block;
        return distanceInBlocks * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000)
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
     else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
 }