import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MainModalComponent } from 'src/app/modal/main-modal/main-modal.component';
import { WarningModalComponent } from 'src/app/modal/warning-modal/warning-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public modalController: ModalController
  ) { }

  public async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: MainModalComponent,
      backdropDismiss: false
    });
    return await modal.present();
  }

  public async presentWarningModal(message:string): Promise<void>{ 
    const modal = await this.modalController.create({
      component: WarningModalComponent,
      componentProps : { message : message }
    });
  }

  public async closeModal(): Promise<void> {
    await this.modalController.dismiss();
  }
}
