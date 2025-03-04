import { Component, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favourite-card',
  imports: [ RouterLink],
  templateUrl: './favourite-card.component.html',
  styles: ``
})
export class FavouriteCardComponent {

  @Input() movie: any

  constructor(private DataService: DataService) { }

  deleteFromFavourites(movie: any) {
    this.DataService.deleteFromFavorites(movie)
  }

  getDetails() {
    return this.DataService.getDetails()
  }

}
