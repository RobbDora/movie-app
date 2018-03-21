import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MovieService {
  public movieData: any[] = [];

  apiKey: string;

  constructor(private http: Http) {
    this.apiKey = '4fdb7ac405e8e6078d9b1d626704d7de';
  }

  searchMovies(searchTerm: string) {
    console.log("We are in movie service", searchTerm);
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=" +this.apiKey+"&query=" + searchTerm)
      .map(response => response.json());
  }

  setMovieData(data: any) {
    this.movieData.push(data);
  }

  getMovieData() {
    console.log("Get movies", this.movieData);
    return this.movieData;
  } 

}
