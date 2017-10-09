import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './componentes/header1/header1.component';
import { Parte2Component } from './componentes/parte2/parte2.component';
import { Parte3Component } from './componentes/parte3/parte3.component';
import { Parte4Component } from './componentes/parte4/parte4.component';
import { Parte5Component } from './componentes/parte5/parte5.component';
import { Parte6Component } from './componentes/parte6/parte6.component';
import { Parte7Component } from './componentes/parte7/parte7.component';
import { Footer8Component } from './componentes/footer8/footer8.component';
import { Lazy8Component } from './componentes/lazy8/lazy8.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AgmCoreModule } from '@agm/core';

import { CoordenadasService } from './services/coordenadas.service';
import { TextoPipe } from './pipes/texto.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Parte2Component,
    Parte3Component,
    Parte4Component,
    Parte5Component,
    Parte6Component,
    Parte7Component,
    Footer8Component,
    Lazy8Component,
    TextoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule, 
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCwKewtkCm4fmaoMv5G1Ho39UlYdg7EKgs'
    })
  ],
  providers: [CoordenadasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
