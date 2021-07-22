import { Component, OnInit } from '@angular/core';


interface Category {
  value: number;
  viewValue: string;
}

interface Difficulty {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})

export class SelectorComponent implements OnInit {
  category: Category[] = [
    {value: 1, viewValue: 'Mathematics'},
    {value: 2, viewValue: 'Sports'},
    {value: 3, viewValue: 'Art'}
  ];

  difficulty: Difficulty[] = [
    {value: 1, viewValue: 'Easy'},
    {value: 1, viewValue: 'Medium'},
    {value: 1, viewValue: 'Hard'},
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
