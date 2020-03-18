export class Elevator {
  currentFloor: number;
  maxFloor: number;

  constructor(maxFloor: number) {
    this.currentFloor = 1;
    this.maxFloor = maxFloor;
  }

  moveFloors = (newFloor: number) => {
    const currFloor = this.currentFloor;
    if (currFloor < newFloor) {
      for (let i = currFloor; i <= newFloor; i++) {
        if (i === currFloor) {
          console.log('Closing doors!')
        } else if (i > currFloor && i < newFloor ) {
          console.log(`Now passing floor ${i}`)
        } else {
          console.log(`Opening doors on floor ${i}!`)
        }
      }
    }
  }
};
