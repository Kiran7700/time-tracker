import { Component } from '@angular/core';
import { TimeTrackerApiService } from "@api";

@Component({
  selector: 'time-tracker',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  title = 'Time Tracker';
  message: string;

  constructor(
    private timeTrackerApi: TimeTrackerApiService
  ) {
    this.message = timeTrackerApi.get();
  }
}
