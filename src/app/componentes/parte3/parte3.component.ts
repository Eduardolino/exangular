import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.css']
})
export class Parte3Component implements OnInit {
private tipodeletra:string;
current_letra:string:lowercase;
default_letra:string:lowercase;
avalaible_letra:Array<string>=['mayusculas','minusculas','primer mayuscula']
  constructor() { }

  ngOnInit() {
  }

}
