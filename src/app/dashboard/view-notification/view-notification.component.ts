import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.scss'],
})
export class ViewNotificationComponent implements OnInit {

  @Input() table: any;
  
  constructor() { }

  ngOnInit() {}

}
