import { Component} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  searchResults: Array<Object>;
  searchTerm: string;

  constructor(private movieService: MovieService) { }

  searchMovies() {
    this.movieService.searchMovies(this.searchTerm).subscribe(res => {
      this.searchResults = res.results;
    })
  }

  ngOnInit() { }

}
