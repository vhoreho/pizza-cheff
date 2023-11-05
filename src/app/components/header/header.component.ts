import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../app.component.css'],
})
export class HeaderComponent {
  anchorLinks: Array<{ text: string; href: string }> = [
    { text: 'Пиццы', href: '#pizzas' },
    { text: 'Напитки', href: '#drinks' },
    { text: 'Оплата и доставка', href: '#payment' },
    { text: 'Контакты', href: '#contacts' },
  ];
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onTransitionEnd() {
    if (!this.isMenuOpen) {
      this.isMenuOpen = true;
    }
  }
}
