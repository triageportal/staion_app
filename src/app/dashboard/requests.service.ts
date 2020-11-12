import { Injectable } from '@angular/core';
import { requests } from '../data/requests';
import { Request } from '../interfaces/request';
import { Employee } from '../interfaces/employee';
import { emlpoyees } from '../data/employees';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private _requests: Request[] = [];
  private _assignees: Employee[] = emlpoyees;

  get emlpoyees() {
    return this._assignees
  }

  get requests() {
    return this._requests;
  }

  constructor() {
    this._requests = requests
  }

  getAssignee (key) {
    return this._assignees.find( item => {
      return item.key == key
    })
  }

   
}
