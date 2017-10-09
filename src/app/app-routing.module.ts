import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parte6Component } from "./componentes/parte6/parte6.component";
import { Lazy8Component } from "./componentes/lazy8/lazy8.component";
import { Header1Component } from "./componentes/header1/header1.component";
import { Parte2Component } from "./componentes/parte2/parte2.component";
import { Parte3Component } from "./componentes/parte3/parte3.component";
import { Parte4Component } from "./componentes/parte4/parte4.component";
import { Parte5Component } from "./componentes/parte5/parte5.component";
import { Parte7Component } from "./componentes/parte7/parte7.component";
import { Footer8Component } from "./componentes/footer8/footer8.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },{
    path:'header1',
    component:Header1Component
  },{
    path:'parte2',
    component:Parte2Component
  },{
    path:'parte3',
    component:Parte3Component
  },{
    path:'parte4',
    component:Parte4Component
  },{
    path:'parte5',
    component:Parte5Component
  },{
    path:'parte6',
    component:Parte6Component
  },{
    path:'parte7',
    component:Parte7Component
  },{
    path:'lazy8',
    component:Lazy8Component
  },{
    path:'footer8',
    component:Footer8Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
