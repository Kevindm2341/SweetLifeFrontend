import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroClientesRoutingModule } from './registro-clientes-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    RegistroClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroClientesModule { }