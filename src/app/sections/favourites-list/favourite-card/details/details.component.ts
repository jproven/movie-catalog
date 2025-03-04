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

  getMovieById(id: number) {
    this.ApiService.getMovieById(id).subscribe((json) => {
      let movieJSON: any = json;
      console.log(movieJSON);
    });
  }

  getFavouriteById(id: string) {
    return this.DataService.getFavouriteMovies().find(x => x.imdbID == id)
  }

  getMovieByName(name: string) {
    this.ApiService.getMovieByName(name).subscribe((json) => {
      let movieJSON: any = json;
      console.log(movieJSON);
    });
  }

  invertDetails() {
    this.DataService.invertDetails();
  }

  ngOnInit() {
    let movieId = this.route.snapshot.paramMap.get('id') || ''
    this.movie = this.getFavouriteById(movieId)
  }
}
