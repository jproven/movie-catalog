import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase = 'http://www.omdbapi.com/?apikey=f2ac963e&'

  constructor(private http: HttpClient) { }

  getMovieById(id: number) {
    return this.http.get(this.urlBase + "i=" + id)
  }

  getMovieByName(name: string) {
    return this.http.get(this.urlBase + "t=" + name)
  }

  searchMovie(name: string) {
    return this.http.get(this.urlBase + "s=" + name)
  }

}
