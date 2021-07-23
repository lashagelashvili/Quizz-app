import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  message: number;

  constructor(private shared: StateService) { }

  ngOnInit(): void {
    this.message = this.shared.getMessage()
  }
}
