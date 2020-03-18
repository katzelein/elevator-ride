import { Elevator } from "./";

describe("elevator ride", () => {
  describe("moveFloors", () => {
    it("should send the elevator to the appropriate floor", () => {
      let elevator = new Elevator(5);
      jest.spyOn(console, "log");
      elevator.moveFloors(3);
      // @ts-ignore
      expect(console.log.mock.calls).toEqual([
        ["Closing doors!"],
        ["Now passing floor 2"],
        ["Opening doors on floor 3!"]
      ]);
    });
  });
});
