import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() Favorito = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  seleccionar(event: any, movie: any) {
    this.Favorito.emit({
      movie: movie
    });
  }
}
