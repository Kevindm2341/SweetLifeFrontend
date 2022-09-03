import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroClientesRoutingModule } from './registro-clientes-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';

@NgModule({
  declarations: [
    IndexComponent,
    NgbdModalBasicComponent
  ],
  imports: [
    CommonModule,
    RegistroClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroClientesModule { }
