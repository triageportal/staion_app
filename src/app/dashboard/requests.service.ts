import { Injectable } from '@angular/core';
import { requests } from '../data/requests';
import { Request } from '../interfaces/request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private _requests: Request[] = [];

  get requests() {
    return this._requests;
  }

  constructor() {
    this._requests = requests
   }

   
}
