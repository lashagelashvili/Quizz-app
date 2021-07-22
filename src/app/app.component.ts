import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';

  constructor(private api: GetApiService) {

  }

  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      console.warn('get api data', data);
    })
  }
}
