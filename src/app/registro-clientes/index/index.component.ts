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

  id: number | undefined;
  registro: RegistroClientes | undefined;

  today: Date = new Date();
  pipe = new DatePipe('en-Us');
  public registroClientes: RegistroClientes[] = [];
  form!: FormGroup;

  constructor(
    public registroClientesService: RegistroClientesService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.registroDia();
    this.CrearRegistroHora();

    //this.registro.fecha = ;
    console.log(this.pipe.transform(Date.now(), 'h:mm'));
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
    while (iterador < 0) {
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
    console.log(this.form.value);

    this.registroClientesService.create(this.form.value).subscribe((res) => {
      //this.router.navigateByUrl()
    });
  }
  ObtenerRigistroHora(){
    this.registroClientesService.find(1).subscribe((data: RegistroClientes)=>{
      this.registro = data;
      console.log(this.registro)
    })
  }
  modificarClientesHora(){
    // this.form = new FormGroup({
    //   fecha: new FormControl(''),
    //   hora: new FormControl(''),
    //   contador: new FormControl(''),
    // });
  }





}
