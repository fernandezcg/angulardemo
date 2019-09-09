import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from "./record";

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private _url: string = "/api/records";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Record []>(this._url)
  }

}
