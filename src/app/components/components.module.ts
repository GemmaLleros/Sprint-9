import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OverviewComponent } from './overview/overview.component';
import { MapComponent } from './map/map.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RatesComponent } from './rates/rates.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    AvailabilityComponent,
    ContactComponent,
    GalleryComponent,
    MapComponent,
    OverviewComponent,
    RatesComponent,
    LoginComponent,
    RegisterComponent  
  ],
  imports: [
    NgModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
     
    
  ]
})
export class ComponentsModule { }
