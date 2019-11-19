function distanceFromHqInBlocks(num) {
    const headquarters = 42; 

    if (num < headquarters) {
        return headquarters - num;
    } else if (num > headquarters) {
        return num - headquarters;
    } 
    
}

function distanceFromHqInFeet(num) {
    const headquarters = 42;  
    const feet = 264;

    if (num < headquarters) {
        return (headquarters - num) * feet; 
    } else if (num > headquarters) {
        return (num - headquarters) * feet;
    } 
    
}

function distanceTravelledInFeet(startingNum, endingNum) {
     
    const feet = 264;

    if (startingNum < endingNum) {
        return (endingNum - startingNum) * feet; 
    } else if (startingNum > endingNum) {
        return (startingNum - endingNum) * feet;
    } 
    
}

function calculatesFarePrice(start, destination) {

    const feet = 264;
    var travelledInFeet = distanceTravelledInFeet(start, destination);

    if (travelledInFeet < 400) {return 0}
        else if (travelledInFeet >= 400 && travelledInFeet <= 2000) {return .02 * (travelledInFeet - 400)}

        else if (travelledInFeet > 2500) {return 'cannot travel that far';} 

        else if (travelledInFeet > 2000) {return 25} 

        



    


   




}