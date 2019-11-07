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
      title: 'ion-slides',
      url: 'ion-slides'
    },
    {
      title: 'status-bar-scroll-top',
      url: 'status-bar-scroll'
    },
    {
      title: 'ion-modal',
      url: 'ion-modal'
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
