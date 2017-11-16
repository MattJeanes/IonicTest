import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public image: string;
  constructor(public navCtrl: NavController, public cameraModule: Camera, private alertCtrl: AlertController) {

  }

  public async camera() {
    try {
      const pic = await this.cameraModule.getPicture();
      const base64Image = 'data:image/jpeg;base64,' + pic;
      this.image = base64Image;
    } catch (e) {
      const alert = this.alertCtrl.create({
        title: 'Failed to capture image',
        subTitle: e.toString(),
        buttons: ['Damn']
      });
      alert.present();      
    }
  }
}
