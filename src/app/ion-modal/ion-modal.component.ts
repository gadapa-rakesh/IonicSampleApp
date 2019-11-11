import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.component.html',
  styleUrls: ['./ion-modal.component.scss'],
})
export class IonModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  async dismissModal() {
    this.modalCtrl.dismiss();
  }

}
