import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======

import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

<<<<<<< HEAD
>>>>>>> c9b49b5baf930e7dc96bc21d4f6069fac79690e7
=======
>>>>>>> c9b49b5baf930e7dc96bc21d4f6069fac79690e7
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule, CarouselModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
<<<<<<< HEAD
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    
=======
    AppRoutingModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
>>>>>>> c9b49b5baf930e7dc96bc21d4f6069fac79690e7
=======
    AppRoutingModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
>>>>>>> c9b49b5baf930e7dc96bc21d4f6069fac79690e7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
