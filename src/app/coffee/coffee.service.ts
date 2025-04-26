import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from './Coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCoffeeList(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }
}
