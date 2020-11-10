import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../interfaces/request';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss'],
})
export class NewTableComponent implements OnInit {

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
