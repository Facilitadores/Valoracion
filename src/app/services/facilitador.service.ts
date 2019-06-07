import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilitadorService {
  url = "http://localhost:8080/valoracion"
  constructor(private http: HttpClient) { }

  getFacilitadores(celula: string): Observable<any> {
    return this.http.get(`${this.url}/facilitadorcelula/${celula}`);

  }

  getCelulas(): Observable<any> {
    return this.http.get(`${this.url}/celulas`);

  }

  buscarRespuesta(celula: string, usuario: string): Observable<any> {
    return this.http.get(`${this.url}/preguntas/${celula}/${usuario}`);

  }

  getPreguntas(): Observable<any> {
    return this.http.get(`${this.url}/preguntas`);

  }

  guardar(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntas', data);
    //alert("User created successfully.");
  }


  guardarP2(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntas2', data);
    //alert("User created successfully.");
  }

  guardarP3(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntas3', data);
    //alert("User created successfully.");
  }

  guardarP4(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntas4', data);
    //alert("User created successfully.");
  }

  guardarP5(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntas5', data);
    //alert("User created successfully.");
  }

  guardarP6(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntas6', data);
    //alert("User created successfully.");
  }

  guardarGeneral(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntasgeneral', data);
    //alert("User created successfully.");
  }
}


