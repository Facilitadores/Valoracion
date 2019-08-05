import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  url = "http://ec2-13-59-5-126.us-east-2.compute.amazonaws.com:8080/valoracion"  
  constructor(private http: HttpClient) { }
//"http://ec2-13-59-5-126.us-east-2.compute.amazonaws.com:8080/valoracion"
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
resultadofinal(celula: string): Observable<any> {
  return this.http.get(`${this.url}/resultadofinal/${celula}`);
}
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
  updateMadurez(data: any) {
    return this.http.post(`${this.url}/guardarMadurez`, data);
    //alert("User created successfully.");
  }  
}


