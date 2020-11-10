import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../interfaces/request';
import { NewRequestModalComponent } from '../new-request-modal/new-request-modal.component';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss'],
})
export class NewTableComponent implements OnInit {

  @Input() requests: Request[] = [];

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  openRequest(request: Request) {
    this.modal.create({
      component: NewRequestModalComponent, 
      componentProps: { 
        request: request
      }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.role);
      
    })
  }

}
