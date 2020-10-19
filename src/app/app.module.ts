import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule,Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes= [
  {path: '',redirectTo: '/formulario', pathMatch: 'full'},
  {path: 'formulario',component: FormularioComponent},
  {path: 'consulta',component: ConsultaComponent},
  {path: 'actualizar',component: ActualizarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ConsultaComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
