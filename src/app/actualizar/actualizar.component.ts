import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/usuarios';
import { ConsultaService } from '../servicios/consulta.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  usuarios = [];   
  user: Usuarios = new Usuarios();

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
      this.listar();   
  }

  listar(){
    this.consultaService.findAll().subscribe(
      res=>{
        if(res){
          this.usuarios=res;
        }else{
          alert("No hay usuarios procesados");
        }
        
      }
    )
  }

  

}
