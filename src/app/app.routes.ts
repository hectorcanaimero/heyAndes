import { RouterModule, Routes } from "@angular/router";

const app: Routes = [
  { path: '', redirectTo: '/empresas', pathMatch: 'full' },
  { path: 'empresas', loadChildren: () => import('./pages/empresas/empresas.module').then(mod => mod.EmpresasModule) },
]


export const APP_ROUTE = RouterModule.forRoot(app);
