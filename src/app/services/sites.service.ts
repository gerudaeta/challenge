import { Injectable } from '@angular/core';
import { RequestService } from '../core/services/request.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(private _requestService: RequestService) { }

  obtenerSites(): Observable<any> {
    let url = `api/sites`;
    return this._requestService.get(url);
  }
}
