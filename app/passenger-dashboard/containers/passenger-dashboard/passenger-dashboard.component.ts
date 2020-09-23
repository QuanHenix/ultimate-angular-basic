import { Component, OnChanges, OnInit } from "@angular/core";
import { filter } from "core-js/fn/array";
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
export class PassengerDashboardComponent implements OnInit, OnChanges {
  passengers: Passenger[];
  constructor(private passengerDashboardService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengers = this.passengerDashboardService.getPassengers();
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((p: Passenger) => {
      return p.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((p: Passenger) => {
      if (p.id === event.id) {
        p = Object.assign({}, p, event);
      }
      return p;
    });

    // let newPassengerIndex = this.passengers.findIndex(
    //   (p: Passenger) => p.id === event.id
    // );
    // this.passengers[newPassengerIndex] = event;
    console.log(this.passengers);
  }

  ngOnChanges(changes: any) {
    console.log("on father changes : " + this.passengers);
  }
}
