import { ProcesadosService } from './../servicios/procesados.service';
import { ConsultaService } from './../servicios/consulta.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {


  usuarios = [];   
  selectedItems=[]; 
  procesado: boolean= true;

  @Output() selectedChange:EventEmitter<any> = new EventEmitter();
  
  constructor(private consultaService: ConsultaService,
              private formBuilder: FormBuilder,
              private router: Router,
              private procesadosService: ProcesadosService ) { }
  ngOnInit() {

    this.consultaService.findAll().subscribe(
      res=>{
        this.usuarios=res;
      }
    )

  }

  procesar(e:any, id:string){

    if(e.target.checked){
      console.log(id + 'Checked');
      this.selectedItems.push(id);
    }else{
      console.log(id + 'UnChecked');
      this.selectedItems = this.selectedItems.filter(m=>m!=id);
    }
   console.log(this.selectedItems);
   
   this.procesadosService.ActualizarProcesados(this.selectedItems,this.procesado).subscribe(
      user=>{
        alert('Usuario procesado');
        this.router.navigateByUrl('/consulta');
      }
    ) 

  }
}
