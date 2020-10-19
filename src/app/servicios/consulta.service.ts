import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  URLlocalhost = environment.url;
  Listar= environment.Consulta;
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    
    let url= this.URLlocalhost+this.Listar
    return this.http.get(url);

  }

}
