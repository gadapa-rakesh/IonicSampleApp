import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ion-select-issue',
  templateUrl: './ion-select-issue.page.html',
  styleUrls: ['./ion-select-issue.page.scss'],
})
export class IonSelectIssuePage implements OnInit {

  public securityQuestionForm;
  public questionList = [
    'question 1',
    'question 2',
    'question 3',
    'question 4'
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // this.securityQuestionForm = this.buildsecurityQueForm();
  }

  // buildsecurityQueForm(): void {
  //   this.securityQuestionForm = this.formBuilder.group({
  //     securityAns1: ['']
  //   });
  // }

}
