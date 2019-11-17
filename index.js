function distanceFromHqInBlocks(num) {
    let answer = 0;
    const block = 42;
        answer = num - block;
    if (answer >= 0) {
        return answer;
    } else {
       return Math.abs(answer);
    }
}


function distanceFromHqInFeet(arg) {
    let answer = distanceFromHqInBlocks(arg) * 264;
    return answer;
}

function distanceTravelledInFeet(varb1, varb2) {
    let sum = varb1 - varb2;
    if (sum<0) {
      return  Math.abs(sum) * 264;
    } else {
        return sum * 264;
    }
}

function calculatesFarePrice(start,distination) {
    let feet = distanceTravelledInFeet(start, distination);
   if (feet <= 400.0) {
       return 0;
   }else if (feet > 400 && feet < 2000) {
       return (feet - 400.0) * 0.02;
   } else if (feet >= 2000 && feet < 2500) {
       return 25;
   } else {
       return "cannot travel that far";
   }

}