import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.inteface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: ` <div>Viewer: {{ passenger | json }}</div> `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassenger(2)
      .subscribe((data: Passenger) => (this.passenger = data));
  }
}
