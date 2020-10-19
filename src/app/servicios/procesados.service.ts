import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcesadosService {

  URLlocalhost = environment.url;
  Update= environment.Actualizar ;
  

  constructor(private http: HttpClient) { }

  ActualizarProcesados(usuarios,procesado): Observable<any> {
    
    let url= this.URLlocalhost+this.Update
    return this.http.put(url,usuarios);

  }

}
