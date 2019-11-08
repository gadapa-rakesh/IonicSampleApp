import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonModalIssuePage } from './ion-modal-issue.page';

const routes: Routes = [
  {
    path: '',
    component: IonModalIssuePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonModalIssuePage]
})
export class IonModalIssuePageModule {}
