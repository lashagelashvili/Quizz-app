import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  message: number;

  constructor(
    private shared: StateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.message = this.shared.getMessage()
    if (this.message === undefined) {
      this.router.navigateByUrl('/select')
    }
  }
}
