import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './components/header/components/mobile-menu/mobile-menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaModalComponent } from './components/pizzas/components/pizza-modal/pizza-modal.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
    HeroComponent,
    PizzasComponent,
    PizzaModalComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
