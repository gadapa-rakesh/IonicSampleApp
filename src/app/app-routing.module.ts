import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'sample-working-form',
    loadChildren: './sample-working-form/sample-working-form.module#SampleWorkingFormPageModule'
  },
  {
    path: 'ion-select-issue',
    loadChildren: './ion-select-issue/ion-select-issue.module#IonSelectIssuePageModule'
  },
  {
    path: 'ion-spinner-issue',
    loadChildren: './ion-spinner-issue/ion-spinner-issue.module#IonSpinnerIssuePageModule'
  },
  { path: 'ion-modal-issue', 
    loadChildren: './ion-modal-issue/ion-modal-issue.module#IonModalIssuePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
