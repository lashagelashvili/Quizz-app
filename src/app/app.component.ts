import { Component } from '@angular/core';
import { ApiService } from './api/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    
  }
}
