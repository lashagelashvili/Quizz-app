import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Question } from '../api/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public currentQuestionIndex: number = 0;

  public score: number = 0;

  public questions: Question[] = [];

  public answers: string[] = [];

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.api.getQuestions({ category: '21', numberOfQuestions: '10', difficulty: 'easy', type: 'multiple' }).subscribe((questions) => {
      this.questions = questions;
      // console.log(questions);
      // console.log(this.answers)
      this.updateAnswers()
    })
  };

  getCurrentQuestion(): Question {
    return this.questions[this.currentQuestionIndex]
  }

  updateAnswers(): void {
    this.answers = [];
    const currentQuestion = this.getCurrentQuestion();
    this.answers.push(...currentQuestion.incorrect_answers);
    const index = getRandomIntInclusive(0, 3);
    this.answers.splice(index, 0, currentQuestion.correct_answer);
  }

  onClick(answer: string) {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion.correct_answer === answer) {
      this.score++;
    }
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.router.navigateByUrl('result')
      return;
    }

    this.currentQuestionIndex++;
    this.updateAnswers();
  }
}


function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
