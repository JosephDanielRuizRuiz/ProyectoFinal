import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Datos } from '../model/datos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  API_URI1 ='';

  constructor(private http: HttpClient) { }

  envio(){
    return this.http.get(`${this.API_URI1}`);
  }

  guardar(datos: Datos) {
    return this.http.post(`${this.API_URI1}`, datos);
  }
}