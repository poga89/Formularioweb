import { Usuarios } from './../model/usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  
  URLlocalhost = environment.url;
  Crear= environment.Nuevo;
  

  constructor(private http: HttpClient) { }

  Create(usuarios): Observable<any> {
    
    let url= this.URLlocalhost+this.Crear
    return this.http.post(url,usuarios);

  }


}
