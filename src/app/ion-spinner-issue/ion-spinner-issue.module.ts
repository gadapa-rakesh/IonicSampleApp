import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonSpinnerIssuePage } from './ion-spinner-issue.page';

const routes: Routes = [
  {
    path: '',
    component: IonSpinnerIssuePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonSpinnerIssuePage]
})
export class IonSpinnerIssuePageModule {}
