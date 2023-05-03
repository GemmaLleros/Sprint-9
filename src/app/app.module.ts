import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/header/menu/menu.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
