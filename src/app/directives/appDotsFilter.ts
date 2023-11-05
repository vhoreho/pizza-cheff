import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFilterDots]',
})
export class FilterDotsDirective {
  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;

    const filteredValue = value.replace(/\./g, '');
    inputElement.value = filteredValue;
  }
}
