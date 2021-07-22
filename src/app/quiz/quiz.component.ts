import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Question} from '../api/api';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public questions: Question[] = [];

  public answers: string[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getQuestions({ category: '21', numberOfQuestions: '10', difficulty: 'easy', type: 'multiple' }).subscribe((data) => {
      this.questions = data;
      console.log(data[0]);
      this.answers.push(...data[0].incorrect_answers);
      const index = getRandomIntInclusive(0, 3);
      this.answers.splice(index, 0, data[0].correct_answer);
      console.log(this.answers)
    })
  }
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
