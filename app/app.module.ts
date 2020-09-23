import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  imports: [
    //Angular modules
    BrowserModule,
    FormsModule,
    CommonModule,
    //custom modules
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
