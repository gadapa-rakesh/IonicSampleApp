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
  {
    path: 'ion-slides',
    loadChildren: './ion-slides/ion-slides.module#IonSlidesPageModule'
  },
  {
    path: 'status-bar-scroll',
    loadChildren: './status-bar-scroll/status-bar-scroll.module#StatusBarScrollPageModule'
  },
  {
    path: 'ion-modal',
    loadChildren: './ion-modal/ion-modal.module#IonModalPageModule'
  },
  { path: 'in-app-browser', loadChildren: './in-app-browser/in-app-browser.module#InAppBrowserPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
