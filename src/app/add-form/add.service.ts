import { Data } from '../data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/data`;

@Injectable({
  providedIn: 'root'
})
export class AddService {
  items: Data[] = [];
  constructor(private http: HttpClient) { }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  addData(data: Data) {
    this.items.push(data);
  }

  getData() {
    return this.items;
  }

  clearForm() {
    this.items = [];
    return this.items;
  }
}
