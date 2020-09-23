import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.inteface";

@Component({
  selector: "passenger-count",
  styleUrls: ["passenger-count.component.scss"],
  template: `
    <div>Checked-in Passenger: {{ getCheckedIn() }}/{{ items.length }}</div>
  `,
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  getCheckedIn(): number {
    if (!this.items) return;
    return this.items.filter((p: Passenger) => p.checkedIn).length;
  }
}
