import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-favorites',
  templateUrl: './movie-favorites.component.html',
  styleUrls: ['./movie-favorites.component.css']
})
export class MovieFavoritesComponent implements OnInit{
  movieList: any[];

  constructor(public movieService: MovieService) {
   
  }

  ngOnInit() {
    this.movieList = this.movieService.getMovieData();
  }

}
