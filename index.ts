export class Elevator {
  currentFloor: number;
  topFloor: number;
  trips: number;
  mode: string;
  name: string;

  constructor(topFloor: number) {
    this.currentFloor = 1;
    this.topFloor = topFloor;
    this.trips = 0;
    this.mode = "Active";
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

  goesUp = (currFloor: number, newFloor: number) => {
    for (let i = currFloor; i <= newFloor; i++) {
      if (i === currFloor) {
        this.mode = "up";
        this.closeDoors();
      } else if (i > currFloor && i < newFloor) {
        this.passingFloor(i);
        this.currentFloor = i;
      } else {
        this.openDoors(i);
        this.mode = "stopped";
      }
    }
  };

  goesDown = (currFloor: number, newFloor: number) => {
    this.mode = "down";
    for (let i = currFloor; i >= newFloor; i--) {
      if (i === currFloor) {
        this.mode = "down";
        this.closeDoors();
      } else if (i < currFloor && i > newFloor) {
        this.passingFloor(i);
        this.currentFloor = i;
      } else {
        this.openDoors(i);
        this.mode = "stopped";
      }
    }
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
      this.goesUp(currFloor, newFloor);
    } else {
      this.goesDown(currFloor, newFloor);
    }
    this.currentFloor = newFloor;
    this.setsChecksTrips();
  };

  setsChecksTrips = () => {
    this.trips += 1;
    if (this.trips === 100) {
      this.mode = "maintenance";
    }
  };

  repairsElevator = () => {
    this.trips = 0;
  };
}

export class ElevatorSystem {
  allElevators: Array<Elevator>;

  constructor(allElevators: Array<Elevator>) {
    this.allElevators = allElevators;
  }

  sendRequestToNearestElevator = (requestedFloor: number) => {
    const closestElevator = this.findClosestElevator(requestedFloor);
    closestElevator.moveFloors(requestedFloor);
  };

  findClosestElevator = (requestedFloor: number): Elevator => {
    let closestElevator = this.allElevators[0];
    for (let i = 1; i < this.allElevators.length; i++) {
      if (!closestElevator) {
        closestElevator = this.allElevators[i];
      } else if (
        this.allElevators[i].currentFloor < closestElevator.currentFloor
      ) {
        // also needs to confirm elevator is moving in the right direction
        // and not in maintenance mode
        closestElevator = this.allElevators[i];
      }
    }
    return closestElevator;
  };
}
