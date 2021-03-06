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
  trackers: any;

  constructor(
    private timeTrackerApi: TimeTrackerApiService
  ) {
    timeTrackerApi.get().subscribe(this.apiHandler.bind(this));
  }

  private apiHandler(data: any): void {
    this.trackers = JSON.stringify(data);
  }
}
