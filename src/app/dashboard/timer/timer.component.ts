import { Component, OnInit, Input } from '@angular/core';
import { timer, interval } from 'rxjs'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  constructor() { }

  timer: any
 // @Input() startTime;
 startTime = new Date().getTime()
 color = 'success';

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.timer = new Date().getTime() - this.startTime
      if (this.timer > 3 * 60 * 1000 && this.timer < 3 * 60 * 1000) {
        this.color = 'warning'
      } else if (this.timer > 4 * 60 * 1000) {
        this.color = 'danger'
      }
    })
  }



}
