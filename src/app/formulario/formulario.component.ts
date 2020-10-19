import { Usuarios } from './../model/usuarios';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../servicios/registro.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  constructor(private registroService: RegistroService,private formBuilder: FormBuilder,
      private router: Router) { }

  registerForm: FormGroup;
  submitted = false;
  f;
  user: Usuarios = new Usuarios();

  ngOnInit() {
    
     this.registerForm = this.formBuilder.group({

     nombre: ['', Validators.required],
     apellido:['', Validators.required]
     
    });

    this.f = this.registerForm.controls;
  }

  create(){
    const persona = {
      nombre: this.registerForm.value.nombre,
      apellido: this.registerForm.value.apellido,
      procesado: this.registerForm.value.procesado,
    }
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    
    this.registroService.Create(persona).subscribe(
      user=>{
        alert('Registro del Usuario exitoso');
        this.router.navigateByUrl('/consulta');
      }
    )
  }

}
