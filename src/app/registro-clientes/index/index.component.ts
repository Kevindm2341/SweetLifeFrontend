import { Component, Input, OnInit } from '@angular/core';
import { RegistroClientesService } from '../registro-clientes.service';
import { RegistroClientes } from '../registro-clientes';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

public id!: number;
registro!: RegistroClientes;
 public _contador: number | undefined;

  today: Date = new Date();
  pipe = new DatePipe('en-Us');
  public registroClientes: RegistroClientes[] = [];
  form!: FormGroup;

  constructor(
    public registroClientesService: RegistroClientesService,
    private router: Router,
    public modal: NgbModal
  ) {}

  ngOnInit(): void {

    this.CrearRegistroHora();
    this.registroDia();

  }

  registroDia() {
    this.registroClientesService
      .getRegistroDia()
      .subscribe((data: RegistroClientes[]) => {
        this.registroClientes = data;

      });

  }

  CrearRegistroHora() {
    let iterador: number = 0;
    while (iterador < 24) {
      this.form = new FormGroup({
        fecha: new FormControl(this.pipe.transform(Date.now(), 'yyyy/MM/dd')),
        hora: new FormControl(`${iterador}:00`),
        contador: new FormControl(0),
      });
      this.insert();
      iterador++;
    }
  }
  insert() {

    this.registroClientesService.create(this.form.value).subscribe((res) => {

    });
  }
  ObtenerRigistroHora(contenido: any){
    this.registroClientesService.find(1).subscribe((data: RegistroClientes)=>{
      this.registro = data;
      console.log(data)
    this.form = new FormGroup({
      fecha: new FormControl(this.registro.fecha),
      hora: new FormControl(this.registro.hora),
      contador: new FormControl(''),

    });
    this._contador = this.registro.contador;
    this.id = this.registro.id;
    this.modal.open(contenido);

    })



  }
  modificarClientesHora(){

    this.form.value.contador += this._contador;
    console.log(this._contador);
    this.registroClientesService.update(this.id, this.form.value).subscribe(res => {
      this.ngOnInit();
    })

  }

}
