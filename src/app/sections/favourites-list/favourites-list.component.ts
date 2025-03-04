import { DataService } from './../../data.service';
import { Component } from '@angular/core';
import { FavouriteCardComponent } from './favourite-card/favourite-card.component';

@Component({
  selector: 'app-favourites-list',
  imports: [FavouriteCardComponent],
  templateUrl: './favourites-list.component.html',
  styles: ``
})
export class FavouritesListComponent {

  constructor(private DataService: DataService) {}

  getFavouriteMovies() {
    return this.DataService.getFavouriteMovies()
  }

  clearFavourites() {
    this.DataService.clearFavourites()
  }

}
