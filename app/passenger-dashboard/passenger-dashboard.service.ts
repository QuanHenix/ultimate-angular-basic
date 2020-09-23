import { Passenger } from "./models/passenger.inteface";

export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    return [
      {
        id: 1,
        fullname: "Harry",
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: "Ron",
        checkedIn: false,
        checkInDate: 1491742000000,
        children: [{ name: "Hugo", age: 7 }],
      },
      {
        id: 3,
        fullname: "Hermione",
        checkedIn: true,
        checkInDate: 1492742000000,
        children: null,
      },
    ];
  }
}