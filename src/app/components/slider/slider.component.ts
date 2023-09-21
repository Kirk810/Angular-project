import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() name!: string;
  @Input() size!: string;

  constructor(){}

  ngOnInit(){

  }

}
