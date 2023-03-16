import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateAlarmComponent {
  days: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  constructor(private router: Router) {}

  createAlarm() {
    this.router.navigate(['/alarms']);
  }
}
