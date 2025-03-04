import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private favouriteMovies: any[] = []

  private details = false

  constructor(private ApiService: ApiService) {this.favouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies') || '[]')}

  saveToLocalStorage() {
    localStorage.setItem('favouriteMovies', JSON.stringify(this.favouriteMovies))
  }

  getFavouriteMovies() {
    return this.favouriteMovies;
  }

  isAlreadyInFavourites(movie: any) {
    return this.favouriteMovies.findIndex(x => x.imdbID == movie.imdbID) != -1;
  }

  addToFavorites(movie: any) {
    if (this.isAlreadyInFavourites(movie) != true) {
      this.ApiService.getMovieById(movie.imdbID).subscribe((json) => {
        this.favouriteMovies.push(json)
        this.saveToLocalStorage()
      })
    }
  }

  deleteFromFavorites(movie: any) {
    if (this.isAlreadyInFavourites(movie) == true) {
      let index = this.favouriteMovies.indexOf(movie)
      this.favouriteMovies.splice(index, 1)
      this.saveToLocalStorage()
    }
  }

  clearFavourites() {
    this.favouriteMovies = [];
    this.saveToLocalStorage()
  }

  getDetails() {
    return this.details;
  }

  invertDetails() {
    this.details = !this.details;
  }
}
