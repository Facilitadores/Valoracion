import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardarP6Service {
  url = "localhost:8080/valoracion"
  constructor(private http:HttpClient) { }

  getFacilitadores():Observable<any>
  {
    return this.http.get(`${this.url}/guardarP6`);
  
  }
}