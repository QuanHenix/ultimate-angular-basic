import { Component, Input } from "@angular/core";
import { Baggage } from "../../models/baggage.inteface";
import { Passenger } from "../../models/passenger.inteface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate="">
      {{ detail | json }}
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname"
        />
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>
      </div>
      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          required
          [ngModel]="detail?.id"
          #id="ngModel"
        />
        <div *ngIf="id.errors?.required && id.dirty" class="error">
          Passenger ID is required
        </div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          />
          Yes
        </label>
      </div>
      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>

      <div>
        Luggage
        <select name="baggage" [ngModel]="detail?.baggage">
          <option *ngFor="let item of baggage" [ngValue]="item.key">
            {{ item.value }}
          </option>
        </select>
      </div>
      <div>{{ form.value | json }}</div>
      <div>Valid: {{ form.valid | json }}</div>
      <div>Invalid: {{ form.invalid | json }}</div>
    </form>
  `,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: "none",
      value: "no baggage",
    },
    {
      key: "hand-only",
      value: "hand baggage",
    },
    {
      key: "hold-only",
      value: "hold baggage",
    },
    {
      key: "hand-hold",
      value: "hand and hold baggage",
    },
  ];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = +new Date();
    }
  }
}
