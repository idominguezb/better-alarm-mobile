import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {
  alarms = []

  ngOnInit() {
    this.alarms = localStorage.getItem('alarms') ? JSON.parse(localStorage.getItem('alarms') || '{}') : []
  }
}
