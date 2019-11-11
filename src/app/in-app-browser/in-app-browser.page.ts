import { Component, OnInit } from '@angular/core';
import { Plugins, DeviceInfo } from '@capacitor/core';

@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage implements OnInit {

  private deviceInfo: DeviceInfo;
  constructor() { }

  ngOnInit() {
    this.getDeviceInfo();
  }

  async getDeviceInfo() {
    this.deviceInfo = await Plugins.Device.getInfo();
  }

  async open(platform) {
    if(this.deviceInfo.platform === 'ios') {
      await Plugins.CapBrowser.open({url: 'http://capacitor.ionicframework.com/'});
    } else {
      await Plugins.Browser.open({ url: 'http://capacitor.ionicframework.com/' });
    }
  }
}
