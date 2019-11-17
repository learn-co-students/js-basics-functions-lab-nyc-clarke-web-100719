// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(42-street);
};
    
function distanceTravelledInFeet(startPoint,endPoint){
    return Math.abs(startPoint - endPoint)*264;
};

function distanceFromHqInFeet(street){
    return distanceTravelledInFeet(street,42);
};

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    if(distance > 2500) return "cannot travel that far";
    else if(distance <= 400) return 0;
    else if(distance > 400 && distance < 2000)return (distance * 2 - 800)/100;
    else return 25;
};

