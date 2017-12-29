import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssinarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assinar',
  templateUrl: 'assinar.html',
})
export class AssinarPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl:MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssinarPage');
    this.menuCtrl.enable(false);
  }

}
