import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.scss'],
})
export class ProgressTableComponent implements OnInit {

  @Input() requests: Request[] = [];
  
  constructor(private modal: ModalController) { }

  ngOnInit() {}

/*   openNotification(table) {
    console.log("open");
    
    this.modal.create({
      component: ViewNotificationComponent, 
      componentProps: { 
        table: table
      }
    }).then(modalEl => {
      modalEl.present()
    })
  } */

}
