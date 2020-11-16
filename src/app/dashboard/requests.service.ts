import { Injectable } from '@angular/core';
import { newRequests, progressRequests, doneRequests, } from '../data/requests';
import { Request } from '../interfaces/request';
import { Employee } from '../interfaces/employee';
import { emlpoyees } from '../data/employees';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private _newRequests: Request[] = [];
  private _progressRequests: Request[] = [];
  private _doneRequests: Request[] = [];
  private _assignees: Employee[] = emlpoyees;

  get emlpoyees() {
    return this._assignees
  }

  get newRequests() {
    return this._newRequests;
  }

  get progressRequests() {
    return this._progressRequests;
  }

  get doneRequests() {
    return this._doneRequests;
  }

  constructor() {
    this._newRequests = newRequests
    this._progressRequests = progressRequests
    this._doneRequests = doneRequests
  }

  getAssignee (key) {
    return this._assignees.find( item => {
      return item.key == key
    })
  }

  moveProgressToNew (index) {
    const request = this.progressRequests.splice(index, 1);
    request[0]['status'] = 'new';
    this.newRequests.push(request[0]);
  }

  moveProgressToDone (index) {
    const request = this.progressRequests.splice(index, 1);
    request[0]['status'] = 'done';
    this.doneRequests.push(request[0]);
  }

  moveDoneToNew (index) {
    const request = this.doneRequests.splice(index, 1);
    request[0]['status'] = 'new';
    this.newRequests.push(request[0]);
  }

  moveDoneToProgress (index) {
    const request = this.doneRequests.splice(index, 1);
    request[0]['status'] = 'progress';
    this.progressRequests.push(request[0]);
  }

  moveNewToProgress (index) {
    const request = this.newRequests.splice(index, 1);
    request[0]['status'] = 'progress';
    this.progressRequests.push(request[0]);
  }

  moveNewToDone (index) {
    const request = this.newRequests.splice(index, 1);
    request[0]['status'] = 'done';
    this.doneRequests.push(request[0]);
  }

   
}
