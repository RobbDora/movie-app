import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MoviethumbnailComponent {
  public thumbnail: boolean = true;
  public addedToFavorites: boolean = false;

  @Input() movie: Object;

  constructor(private router: Router, public movieService : MovieService) { }

  addToFavorites(movie) {
    this.movieService.setMovieData(movie);
    this.addedToFavorites = true;
  }

  displayModal = 'none';

  openMovieDetails() {
    this.displayModal = 'block';
  }

  closeMovieDetails() {
    this.displayModal = 'none';
  }
}
