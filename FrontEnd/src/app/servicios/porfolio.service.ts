import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

//INYECTAR siempre es en el CONSTRUCTOR

  constructor(private http:HttpClient) { }

  obtenerDatos( ):Observable<any>{
    return this.http.get('FrontEnd/src/assets/data.json')
  }
}
