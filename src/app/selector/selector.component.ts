import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';

interface Category {
  value: string;
  viewValue: string;
}

interface Difficulty {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})

export class SelectorComponent implements OnInit {
  categories: Category[] = [
    {value: '9', viewValue: 'General Knowledge'},
    {value: '10', viewValue: 'Entertainment: Books'},
    {value: '11', viewValue: 'Entertainment: Film'},
    {value: '12', viewValue: 'Entertainment: Music'},
    {value: '13', viewValue: 'Entertainment: Musicals & Theatres'},
    {value: '14', viewValue: 'Entertainment: Television'},
    {value: '15', viewValue: 'Entertainment: Video Games'},
    {value: '16', viewValue: 'Entertainment: Board Games'},
    {value: '17', viewValue: 'Science & Nature'},
    {value: '18', viewValue: 'Science: Computers'},
    {value: '19', viewValue: 'Science: Mathematics'},
    {value: '20', viewValue: 'Mythology'},
    {value: '21', viewValue: 'Sports'},
    {value: '22', viewValue: 'Geography'},
    {value: '23', viewValue: 'History'},
    {value: '24', viewValue: 'Politics'},
    {value: '25', viewValue: 'Art'},
    {value: '26', viewValue: 'Celebrities'},
    {value: '27', viewValue: 'Animals'},
    {value: '28', viewValue: 'Vehicles'},
    {value: '29', viewValue: 'Entertainment: Comics'},
    {value: '30', viewValue: 'Science: Gadgets'},
    {value: '31', viewValue: 'Entertainment: Japanese Anime & Manga'},
    {value: '32', viewValue: 'Entertainment: Cartoon & Animations'}
  ];

  difficulties: Difficulty[] = [
    {value: 'easy', viewValue: 'Easy'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'hard', viewValue: 'Hard'},
  ]

  constructor(
    private router: Router,
    private currentCategory: StateService,
    private currentDifficulty: StateService
  ) { }

  selectedDifficulty: string = 'easy';

  selectedCategory: string = '9';

  ngOnInit(): void {
  }

  sendInfo() {
    this.currentCategory.sendCategoryInfo(this.selectedCategory);
    this.currentDifficulty.sendDifficultyInfo(this.selectedDifficulty);
    this.router.navigateByUrl('quiz');
  }
}
