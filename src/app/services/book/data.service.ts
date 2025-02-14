import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookArray } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
  }

  getData(): Observable<BookArray>{
    let data = this.http.get<BookArray>("https://freetestapi.com/api/v1/books")
    return data
  }
}
