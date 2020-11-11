import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InProgressModalComponent } from '../in-progress-modal/in-progress-modal.component';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.scss'],
})
export class ProgressTableComponent implements OnInit {

  @Input() requests: Request[] = [];
  
  constructor(private modal: ModalController, private auth: AuthService) { }

  ngOnInit() {}

  openRequest(request: Request) {
    console.log("open");
    
    this.modal.create({
      component: InProgressModalComponent, 
      componentProps: { request: request, loginRequired: this.auth.user.loginRequired },
      cssClass: 'request-modal',
      id: 'inProgressId'
    }).then(modalEl => {
      modalEl.present()
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.role);
      
    })
  }

}
