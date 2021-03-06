import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MainModalComponent } from 'src/app/modal/main-modal/main-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public modalController: ModalController
  ) { }

  public async presentModal() {
    const modal = await this.modalController.create({
      component: MainModalComponent,
      backdropDismiss: false
    });
    return await modal.present();
  }

  public closeModal(){
    this.modalController.dismiss();
  }
}
