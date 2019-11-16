// Code your solution in this file!
function distanceFromHqInBlocks(num){
    return Math.abs(num - 42);
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2){
    return Math.abs(num2 - num1) * 264;
}

function calculatesFarePrice(start, destination){
   var a = distanceTravelledInFeet(start, destination);
   console.log(a)

   if (a <= 400){
       return 0;
   }
   else if (a > 2500){
    return 'cannot travel that far';
    }
    else if (a > 2000){
        return 25; 
    }
  
   else if (a > 400 || a <= 2000){
       return (a-400)*.02;
   }


   
//    switch (true){
//        case (a <= 400):
//             return 0;
//             break;
//         case (a > 400 || a <= 2000):
//             return (a-400)*0.02;
//             break;
//         case (a > 2000 || a < 2500):
//             return 25;
//             break;
//         case (a > 2500):
//             return 'cannot travel that far';
//             break;
//    }
}