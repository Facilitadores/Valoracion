import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  url = "http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:8080/valoracion"
  constructor(private http: HttpClient) { }
//"http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:8080/valoracion"
//"http://localhost:8080/valoracion"

//trae las direcciones
getDireccion(): Observable<any> {
  return this.http.get(`${this.url}/direccion`);
}

//trae el compopnente mayor según la dirección seleccionada
getcompomayor(direccion: string): Observable<any> {
    return this.http.get(`${this.url}/componentemayor_direccion/${direccion}`);
  }

  //trae el compopnente mayor según la dirección seleccionada
getcompomenor(compomayor: string): Observable<any> {
  return this.http.get(`${this.url}/componentemenor_compomayor/${compomayor}`);
}

//trae el compopnente mayor según la dirección seleccionada
getfullstack(compomenor: string): Observable<any> {
  return this.http.get(`${this.url}/fullstack_compomenor/${compomenor}`);
}

getcelula(fullstack: string): Observable<any> {
  return this.http.get(`${this.url}/celula_fullstack/${fullstack}`);
}

getfacilitador(celula: string): Observable<any> {
  return this.http.get(`${this.url}/facilitador_celula/${celula}`);
}

  /*
  buscarRespuesta(celula: string, usuario: string): Observable<any> {
    return this.http.get(`${this.url}/preguntas/${celula}/${usuario}`);

  }*/

  guardarInformacion(data: any) {
    return this.http.post(`${this.url}/guardarinformacion`, data);
    //alert("User created successfully.");
  }


  guardarPilar1(data: any) {
    return this.http.post(`${this.url}/guardarPilar1`, data);
    //alert("User created successfully.");
  }
  guardarPilar2(data: any) {
    return this.http.post(`${this.url}/guardarPilar2`, data);
    //alert("User created successfully.");
  }
  guardarPilar3(data: any) {
    return this.http.post(`${this.url}/guardarPilar3`, data);
    //alert("User created successfully.");
  }
  
  guardarPilar4(data: any) {
    return this.http.post(`${this.url}/guardarPilar4`, data);
    //alert("User created successfully.");
  }
/*
  guardarP2(data: any) {
    return this.http.post('http://localhost:8080/valoracion/preguntas3', data);
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
  }*/
}


