import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilitadorService {
  url = "http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion"
  constructor(private http: HttpClient) { }
//"http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200:8080/valoracion"
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
    return this.http.post('http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion/preguntas', data);
    //alert("User created successfully.");
  }


  guardarP2(data: any) {
    return this.http.post('http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion/preguntas2', data);
    //alert("User created successfully.");
  }

  guardarP3(data: any) {
    return this.http.post('http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion/preguntas3', data);
    //alert("User created successfully.");
  }

  guardarP4(data: any) {
    return this.http.post('http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion/preguntas4', data);
    //alert("User created successfully.");
  }

  guardarP5(data: any) {
    return this.http.post('http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion/preguntas5', data);
    //alert("User created successfully.");
  }

  guardarP6(data: any) {
    return this.http.post('http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion/preguntas6', data);
    //alert("User created successfully.");
  }

  guardarGeneral(data: any) {
    return this.http.post('http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:4200/valoracion/preguntasgeneral', data);
    //alert("User created successfully.");
  }
}


