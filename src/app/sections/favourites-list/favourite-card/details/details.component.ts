import { RatingStarsPipe } from '../../../../Pipes/ratings.pipe';
import { ApiService } from './../../../../api.service';
import { Component } from '@angular/core';
import { DataService } from '../../../../data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RatingStarsPipe, RouterLink],
  templateUrl: './details.component.html',
  styles: ``,
})
export class DetailsComponent {

  movie: any

  constructor(private ApiService: ApiService, 
              private DataService: DataService, 
              private route: ActivatedRoute) { }

  getFavouriteById(id: string) {
    return this.DataService.getFavouriteMovies().find(x => x.imdbID == id)
  }

  invertDetails() {
    this.DataService.invertDetails();
  }

  ngOnInit() {
    let movieId = this.route.snapshot.paramMap.get('id') || ''
    this.movie = this.getFavouriteById(movieId)
  }
}
