// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  const hq = 42;

  if (distance > hq) {
    return distance - hq;
  } else if (distance < hq) {
    return hq - distance;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(distanceFrom, distanceTo) {
  return distanceFromHqInFeet(distanceTo) - distanceFromHqInFeet(distanceFrom);
}

function calculatesFarePrice(start, destination) {
  const traveled = distanceTravelledInFeet(start,destination);

  if (traveled > 2500) {
    return 'cannot travel that far';
  } else if (traveled > 2000) {
    return 25;
  } else if (traveled > 400 && traveled < 2000) {
    return ((traveled - 400) * 0.2) / 10;
  } else if (traveled < 400) {
    return 0;
  }
}
