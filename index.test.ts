import { Elevator, ElevatorSystem } from "./";

describe("elevator ride", () => {
  describe("elevator class", () => {
    let spy;
    beforeEach(() => {
      spy = jest.spyOn(console, "log");
    });
    afterEach(() => {
      spy.mockRestore();
    });
    let elevator = new Elevator(10);
    it("should send the elevator to a higher floor", () => {
      elevator.moveFloors(5);
      // @ts-ignore
      expect(console.log.mock.calls).toEqual([
        ["Closing doors!"],
        ["Now passing floor 2"],
        ["Now passing floor 3"],
        ["Now passing floor 4"],
        ["Opening doors on floor 5!"]
      ]);
      expect(elevator.currentFloor).toEqual(5);
      expect(elevator.trips).toEqual(1);
    });
    it("should send the elevator to a lower floor", () => {
      elevator.moveFloors(3);
      // @ts-ignore
      expect(console.log.mock.calls).toEqual([
        ["Closing doors!"],
        ["Now passing floor 4"],
        ["Opening doors on floor 3!"]
      ]);
      expect(elevator.currentFloor).toEqual(3);
      expect(elevator.trips).toEqual(2);
    });
    it("should not send the elevator lower than the bottom floor", () => {
      expect(() => elevator.moveFloors(-1)).toThrow(
        "Cannot go below the bottom floor"
      );
    });
    it("should not send the elevator higher than the top floor", () => {
      expect(() => elevator.moveFloors(15)).toThrow(
        "Cannot go above the top floor"
      );
    });
  });
  describe("elevatorSystem class", () => {
    let elevator1 = new Elevator(10);
    let elevator2 = new Elevator(10);
    let elevator3 = new Elevator(10);
    let elevator4 = new Elevator(10);
    let allElevators = [elevator1, elevator2, elevator3, elevator4];
    let elevatorSystem = new ElevatorSystem(allElevators);
    it("should have a list of all the elevators", () => {
      expect(elevatorSystem.allElevators).toEqual(allElevators);
    });
    it("should send the requested floor to the first available elevator", () => {
      // expect(elevatorSystem.findClosestElevator(4)).toEqual();
    });
  });
});
