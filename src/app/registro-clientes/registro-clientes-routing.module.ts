import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'registro-clientes', redirectTo: 'registro-clientes/index', pathMatch: 'full'},
  { path: 'registro-clientes/index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroClientesRoutingModule { }
