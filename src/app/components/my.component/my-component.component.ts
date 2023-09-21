import {Component} from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html'
})
export class Mycomponent{

  public title!: string;
  public comment!: string;
  public year!: number;

  constructor(){
    this.title = "Hola mundo soy my component";
    this.comment = "This is my first comment";
    this.year = 2023;

    console.log("Componente cargado");
    console.log(this.title, this.comment, this.year);
  }
}
