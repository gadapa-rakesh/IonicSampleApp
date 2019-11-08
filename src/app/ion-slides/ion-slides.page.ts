import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ion-slides',
  templateUrl: './ion-slides.page.html',
  styleUrls: ['./ion-slides.page.scss'],
})
export class IonSlidesPage implements OnInit {

  private selectedTab: number;
  private selectedSegmentInfo: any;
  private index = 0;
  private sliderHeight: number;

  private tabList = [{
    id: 'hello',
    text: 'hello',
    index: 0
  },
  {
    id: 'hi',
    text: 'hi',
    index: 1
  },
  {
    id: 'hey',
    text: 'hey',
    index: 2
  },
  {
    id: 'hola',
    text: 'hola',
    index: 3
  },
  {
    id: 'haha',
    text: 'haha',
    index: 4
  }];

  @ViewChild(IonSlides, {read: false, static: true}) ionSlider: IonSlides;

  constructor(
    private elementRef: ElementRef,
    private platform: Platform,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.selectedTab = this.tabList[this.index].index;
    this.ionSlider.slideTo(this.selectedTab);
    const ionHeaderHeight = this.elementRef.nativeElement.querySelector('ion-header').offsetHeight;
    this.sliderHeight = this.platform.height() - ionHeaderHeight;
  }

  segmentChange(event) {
      this.ionSlider.slideTo(event.detail.value);
      // tslint:disable-next-line: triple-equals
      this.selectedSegmentInfo = this.tabList.find(t => t.index == event.detail.value);
      if (this.selectedSegmentInfo) {
        const selectedSegment = this.elementRef.nativeElement.querySelector('#' + this.selectedSegmentInfo.id);
        selectedSegment.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }

  }

  slideChange() {
    this.ionSlider.getActiveIndex().then(index => {
        this.selectedTab = index;
      });
  }

  moveToSecondPage() {
    this.navController.navigateForward('/status-bar-scroll');
  }

}
