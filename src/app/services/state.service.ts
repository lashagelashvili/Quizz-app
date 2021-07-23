import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
message: number;
currentCategory: string;
currentDifficulty: string;

  constructor() { }

  setMessage(data) {
    this.message = data;
  }

  getMessage() {
    return this.message;
  }

  sendCategoryInfo(category) {
    this.currentCategory = category;
  }

  returnCategoryInfo() {
      return this.currentCategory
  }

  sendDifficultyInfo(difficulty) {
    this.currentDifficulty = difficulty;
  }

  returnDifficultyInfo() {
      return this.currentDifficulty
  }
}
