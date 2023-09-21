import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, DoCheck, OnDestroy {
  public title!: string;
  public movies!: Movie[];
  public favorita!: Movie;
  public date!: any;

  constructor() {
    this.title = 'Movies component';
    this.movies = [
      new Movie(
        'Spiderman Across the Spiderverse',
        2020,
        'https://m.media-amazon.com/images/I/919p74MDUEL.jpg'
      ),
      new Movie(
        'Avengers Endgame',
        2018,
        'https://hips.hearstapps.com/hmg-prod/images/poster-vengadores-endgame-1552567490.jpg?resize=980:*'
      ),
      new Movie(
        'Batman vs Superman',
        2015,
        'https://static.posters.cz/image/1300/posters/batman-vs-superman-batman-teaser-i26355.jpg'
      ),
    ];
    this.date = new Date(2020, 8, 12)
  }

  ngOnInit() {
    console.log('Componente iniciado');
  }
  ngDoCheck() {
    console.log('docheck lanzado');
  }
  changeTitle() {
    this.title = 'The title has change';
  }
  ngOnDestroy() {
    console.log('El componente se va a eliminar');
  }
  mostrarFavorito(event: any) {
    this.favorita = event.movie;
  }
}
