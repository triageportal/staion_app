import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../../interfaces/request';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-in-progress-modal',
  templateUrl: './in-progress-modal.component.html',
  styleUrls: ['./in-progress-modal.component.scss'],
})
export class InProgressModalComponent implements OnInit {

  @Input() request: Request;

  constructor(private modalCntl: ModalController) { }

  ngOnInit() {}

  onDone () {
    this.onCancel('done')
  }

  onCancel (role) {
    this.modalCntl.dismiss(null, role)
  }
}
