import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Passenger } from "./models/passenger.inteface";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(this.http);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json));
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json));
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    let header = new Headers({
      "Content-Type": "application/json",
    });
    let options = new RequestOptions({
      headers: header,
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json));
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json));
  }
}
