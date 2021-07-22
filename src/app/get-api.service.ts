import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  apiCall() {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
  }
}
