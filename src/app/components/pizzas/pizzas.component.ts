import { Component } from '@angular/core';
import { Pizza } from './types';
import { pizzas } from './pizzas';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent {
  pizzas: Pizza[] = pizzas;

  selectedPizza: Pizza | null = null;

  openModal(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  closeModal() {
    this.selectedPizza = null;
  }
}
