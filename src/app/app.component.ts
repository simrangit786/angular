import { Component } from '@angular/core';
import { Router ,ActivatedRoute , ParamMap} from '@angular/router';
import { QuestionService } from './question.service';
import { QuestionBase } from './apps/question-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'Angular';
  name ="";
  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    private route: ActivatedRoute,service: QuestionService
  ) {
    this.questions$ = service.getQuestions();
  }

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
}
}

