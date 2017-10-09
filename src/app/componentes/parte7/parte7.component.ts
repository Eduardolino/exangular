import { Component, OnInit } from '@angular/core';
import { CoordenadasService } from "../../services/coordenadas.service";

@Component({
  selector: 'app-parte7',
  templateUrl: './parte7.component.html',
  styleUrls: ['./parte7.component.css']
})
export class Parte7Component implements OnInit {
  title: string = 'My first AGM project';
  lat: number = -21.510723570521673;
  lng: number = -64.73818302154541;
  datos=[];
  constructor(private dt: CoordenadasService) {
    this.datos=dt.coodernada;
   }

  ngOnInit() {
  }

}
