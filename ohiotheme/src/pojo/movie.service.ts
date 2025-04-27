import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
    private apiUrl = '../../pojo/movies.json'; // Path to your JSON data file

    constructor(private http: HttpClient) {}
  
    getMovies(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
}
