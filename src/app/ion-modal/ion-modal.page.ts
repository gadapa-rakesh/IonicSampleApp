import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonModalComponent } from './ion-modal.component';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.page.html',
  styleUrls: ['./ion-modal.page.scss'],
})
export class IonModalPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async openModal() {
    const alertModal = await this.modalController.create({
      component: IonModalComponent,
      backdropDismiss: false,
      cssClass: 'short_modal'
    });
    await alertModal.present();
  }

}
