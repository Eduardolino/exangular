import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy8',
  templateUrl: './lazy8.component.html',
  styleUrls: ['./lazy8.component.css'],
  changeDetection :ChangeDetectionStrategy.OnPush
})
export class Lazy8Component implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  image = './assets/img/logo.jpg';
  offset = 100;
  constructor(private cd: ChangeDetectorRef) {
    
  }
  onLoadImage(success) {

  }
  ngOnInit() {
  }

}
