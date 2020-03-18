export class Elevator {
  currentFloor: number;
  topFloor: number;

  constructor(topFloor: number) {
    this.currentFloor = 1;
    this.topFloor = topFloor;
  }

  closeDoors = () => {
    console.log("Closing doors!");
  };

  openDoors = (floorNum: number) => {
    console.log(`Opening doors on floor ${floorNum}!`);
  };

  passingFloor = (floorNum: number) => {
    console.log(`Now passing floor ${floorNum}`);
  };

  moveFloors = (newFloor: number) => {
    const currFloor = this.currentFloor;
    if (newFloor < 0) {
      throw new Error("Cannot go below the bottom floor");
    }
    if (newFloor > this.topFloor) {
      throw new Error("Cannot go above the top floor");
    }
    if (currFloor < newFloor) {
      for (let i = currFloor; i <= newFloor; i++) {
        if (i === currFloor) {
          this.closeDoors();
        } else if (i > currFloor && i < newFloor) {
          this.passingFloor(i);
        } else {
          this.openDoors(i);
        }
      }
    } else {
      for (let i = currFloor; i >= newFloor; i--) {
        if (i === currFloor) {
          this.closeDoors();
        } else if (i < currFloor && i > newFloor) {
          this.passingFloor(i);
        } else {
          this.openDoors(i);
        }
      }
    }
    this.currentFloor = newFloor;
  };
}
