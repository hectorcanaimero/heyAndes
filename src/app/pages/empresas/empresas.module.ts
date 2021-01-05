import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';
import { DetailComponent } from './detail/detail.component';
import { EMPRESA_ROUTE } from './empresas.routes';



@NgModule({
  declarations: [EmpresasComponent, DetailComponent],
  imports: [
    CommonModule,
    EMPRESA_ROUTE,
    MDBBootstrapModule
  ]
})
export class EmpresasModule { }
