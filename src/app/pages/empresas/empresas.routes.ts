import { DetailComponent } from './detail/detail.component';
import { EmpresasComponent } from './empresas.component';
import { RouterModule, Routes } from "@angular/router";

const empresas: Routes = [
  { path: '', component: EmpresasComponent },
  { path: ':slug', component: DetailComponent  },
]


export const EMPRESA_ROUTE = RouterModule.forChild(empresas);
