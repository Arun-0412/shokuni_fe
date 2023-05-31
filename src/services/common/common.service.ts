import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public vars: GlobalService,
    private _http: HttpClient
  ) { }


  /**
   * Method to upload avatar
   * 
   * @param Object
   * @param string
   * 
   * @returns Observable
   */
  uploadImg(file: File, directory: string): Observable<any> {
    // image upload url
    let url = this.vars.backend_url + '/image';

    // design form to upload image
    const form = new FormData();
    form.append('directory', directory);
    // append file
    form.append('image[]', file);

    // request to update password
    return this._http.post(url, form).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * Fectch list of countries
   * 
   * @param Object
   * 
   * @returns Observable
   */
  getCountries(values: Object = null): Observable<any> {
    // image upload url
    // let url = this.vars.backend_url +'/countries';

    let url = new URL(this.vars.backend_url + '/countries');
    // append parameters in URL
    for (let i of Object.keys(values)) {
      url.searchParams.append(i, values[i]);
    }

    // request to update password
    return this._http.get(url.href).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * Method to upload avatar
   * 
   * @param Object
   * @param string
   * 
   * @returns Observable
   */
  uploadFile(file: File, directory: string): Observable<any> {
    // image upload url
    let url = this.vars.backend_url + '/file';

    // design form to upload file
    const form = new FormData();
    form.append('directory', directory);
    // append file
    form.append('file[]', file);

    // request to update password
    return this._http.post(url, form).pipe(
      catchError(this.vars.handleError)
    );
  }
}
