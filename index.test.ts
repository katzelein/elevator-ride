import { Elevator } from "./";

describe("elevator ride", () => {
  describe("moveFloors", () => {
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
});
