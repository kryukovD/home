import { Injectable } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal:ModalComponent) { 

  }
  openModal(){
    this.modal.open("test");
  }
}
