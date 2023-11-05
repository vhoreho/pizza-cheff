import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../types';

@Component({
  selector: 'app-pizza-modal',
  templateUrl: './pizza-modal.component.html',
  styleUrls: ['./pizza-modal.component.css'],
})
export class PizzaModalComponent {
  @Input() selectedPizza!: Pizza | null;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
