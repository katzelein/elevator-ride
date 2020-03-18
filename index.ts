export class Elevator {
  currentFloor: number;
  topFloor: number;
  trips: number;
  mode: string;

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
        this.closeDoors();
      } else if (i > currFloor && i < newFloor) {
        this.passingFloor(i);
        this.currentFloor = i;
      } else {
        this.openDoors(i);
      }
    }
  };

  goesDown = (currFloor: number, newFloor: number) => {
    for (let i = currFloor; i >= newFloor; i--) {
      if (i === currFloor) {
        this.closeDoors();
      } else if (i < currFloor && i > newFloor) {
        this.passingFloor(i);
        this.currentFloor = i;
      } else {
        this.openDoors(i);
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
      this.mode = "Maintenance";
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
    // figures out what elevator is closest
    // const closestElevator = this.findClosestElevator(requestedFloor);
    // triggers elevator to "moveFloors"
    // closestElevator.moveFloors(requestedFloor);
  };

  // findClosestElevator = (requestedFloor: number): Elevator => {};
}
