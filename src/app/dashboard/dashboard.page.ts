import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewNotificationComponent } from './view-notification/view-notification.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  openNotification(table) {
    console.log("open");
    
    this.modal.create({
      component: ViewNotificationComponent, 
      componentProps: { 
        table: table
      }
    }).then(modalEl => {
      modalEl.present()
    })
  }

}
