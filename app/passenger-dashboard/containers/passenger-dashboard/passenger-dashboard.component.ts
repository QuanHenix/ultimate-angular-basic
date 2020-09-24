import { Component, OnChanges, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.inteface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>

      <div *ngFor="let passenger of passengers">{{ passenger.fullname }}</div>
      <h3>Passenger Airline</h3>

      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)"
      ></passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerDashboardService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerDashboardService
      .getPassengers()
      .subscribe((data: Passenger[]) => (this.passengers = data));
  }

  handleRemove(event: Passenger) {
    this.passengerDashboardService
      .deletePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((p: Passenger) => {
          return p.id !== event.id;
        });
      });
  }

  handleEdit(event: Passenger) {
    this.passengerDashboardService.updatePassengers(event).subscribe(
      (data: Passenger) => {
        this.passengers = this.passengers.map((p: Passenger) => {
          if (p.id === data.id) {
            p = Object.assign({}, p, event);
          }
          return p;
        });
      },
      (error: any) => {
        console.log("error:" + error);
      }
    );
  }
}
