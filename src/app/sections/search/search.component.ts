import { DataService } from './../../data.service';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  constructor(private ApiService: ApiService, private DataService: DataService) { }

  movies: any[] = []

  getMovie(pattern: string) {
    this.ApiService.searchMovie(pattern).subscribe(
      json => {
        let movieJSON: any = json
        this.movies = movieJSON.Search
        console.log(this.movies)
      }
    )
  }

  addToFavorites(movie: any) {
    this.DataService.addToFavorites(movie)
  }
}
