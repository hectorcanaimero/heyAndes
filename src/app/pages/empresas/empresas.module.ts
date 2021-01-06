import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { EMPRESA_ROUTE } from './empresas.routes';
import { EmpresasComponent } from './empresas.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from './../../shared/components/components.module';



@NgModule({
  declarations: [EmpresasComponent, DetailComponent],
  imports: [
    CommonModule,
    EMPRESA_ROUTE,
    ComponentsModule,
    MDBBootstrapModule
  ]
})
export class EmpresasModule { }
