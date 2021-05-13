import { Component, Input ,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../apps/question-base';
import { QuestioncontrolService} from '../questioncontrol.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions:QuestionBase<string>[] = [];
  form: FormGroup;
  payload = ' ';

  constructor(private qcs: QuestioncontrolService){}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }


}
