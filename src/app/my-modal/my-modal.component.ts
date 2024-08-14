import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent {

  constructor(private modalService: ModalService) {}

  openMyModal() {
    this.modalService.openModal('exampleModal');
  }

  closeMyModal() {
    this.modalService.closeModal('exampleModal');
  }
}
