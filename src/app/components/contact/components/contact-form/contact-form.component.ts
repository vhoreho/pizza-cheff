import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FakeApiService } from '../../../../services/fake-api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  constructor(private fakeApiService: FakeApiService) {}

  contactForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^[^.]+$/),
    ]),
    address: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^\+\d+$/),
    ]),
  });

  isSubmitted = false;
  errorText: string = '';

  get name() {
    return this.contactForm.controls.name;
  }

  get address() {
    return this.contactForm.controls.address;
  }

  get phone() {
    return this.contactForm.controls.phone;
  }

  submitForm() {
    this.fakeApiService.sendFormData(this.contactForm).subscribe(
      () => {
        console.log('Form data submitted:', this.contactForm);
        this.isSubmitted = true;
        this.errorText = '';
        this.resetForm();
        setTimeout(() => {
          this.isSubmitted = false;
        }, 1000);
      },
      (error) => {
        this.errorText = 'Произошла ошибка при отправке данных: ' + error;
      }
    );
  }

  resetForm() {
    this.contactForm.reset();
  }

  onNameChange(event: any) {
    let name = event;

    name = name.replace('.', '');

    this.contactForm.controls.name.setValue(name, { emitEvent: false });
  }
}
