import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-basic',
  templateUrl: './ngbd-modal-basic.component.html',
  styleUrls: ['./ngbd-modal-basic.component.css']
})
export class NgbdModalBasicComponent implements OnInit {

  constructor(public  modal: NgbModal) { }

  ngOnInit(): void {
  }

}
