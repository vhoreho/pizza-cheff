import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent {
  @Input() isMenuOpen: boolean = false;
  @Input() anchorLinks: any[] = [];
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();

  toggleMobileMenu() {
    this.toggleMenu.emit();
  }
}
