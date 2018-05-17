import * as Direction from './Directions';

// console.log(Direction['right'](59),"Direction");
const getNextPosition = (currentDirection, newDirection, lastPostion) => {
  return Direction[newDirection](lastPostion);
};

export default getNextPosition;