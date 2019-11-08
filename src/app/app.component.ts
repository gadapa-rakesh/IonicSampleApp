import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'login Page Issue',
      url: 'login'
    },
    {
      title: 'Sample Form Working',
      url: '/sample-working-form',
    },
    {
      title: 'Ion-select issue',
      url: 'ion-select-issue'
    },
    {
      title: 'Ion-spinner animation issue',
      url: 'ion-spinner-issue'
    },
    {
      title: 'Ion-modal issue',
      url: 'ion-modal-issue'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
