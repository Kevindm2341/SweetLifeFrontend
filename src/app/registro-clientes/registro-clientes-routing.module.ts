import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';

const routes: Routes = [
  { path: 'registro-clientes', redirectTo: 'registro-clientes/index', pathMatch: 'full'},
  { path: 'registro-clientes/index', component: IndexComponent},
  {path: 'registro-clientes/ngbd-modal-basic', component: NgbdModalBasicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroClientesRoutingModule { }
