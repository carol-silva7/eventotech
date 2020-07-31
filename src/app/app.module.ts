import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EventoComponent } from './evento/evento.component';
import { FooterComponent } from './footer/footer.component';
import { DataFormModule } from './data-form/data-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ParceirosComponent } from './parceiros/parceiros.component';
import { CursosComponent } from './cursos/cursos.component';
import { FilterProgComponent } from './filter-prog/filter-prog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    EventoComponent,
    FooterComponent,
    ParceirosComponent,
    CursosComponent,
    FilterProgComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataFormModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
