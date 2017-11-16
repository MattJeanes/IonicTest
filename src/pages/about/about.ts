import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };

  constructor(public navCtrl: NavController, private cameraPreview: CameraPreview, private alertCtrl: AlertController) {

  }

  public async start() {
    try {
      await this.cameraPreview.startCamera(this.cameraPreviewOpts);
    } catch (e) {
      this.error("Failed to open camera", e.toString());
    }
  }
  public async stop() {
    try {
      await this.cameraPreview.stopCamera();
    } catch (e) {
      this.error("Failed to stop camera", e.toString());
    }
  }

  private error(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Oh dear']
    });
    alert.present();
  }

}
