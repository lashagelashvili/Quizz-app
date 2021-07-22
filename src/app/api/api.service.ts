import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../api/api';
import { Quizz } from '../api/api';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private opentdbUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) { }

  getQuestions(query: Quizz): Observable<Question[]> {
    return this.http.get<Question[]>(this.opentdbUrl, {
      params: {
        amount: query.numberOfQuestions,
        category: query.category,
        difficulty: query.difficulty,
        type: query.type
      }
    }).pipe(
      map((data: any) => data.results)
    );
  }
}
