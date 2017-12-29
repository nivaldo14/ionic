import { PedidoPage } from './../pedido/pedido';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssinarPage } from '../assinar/assinar';
/* import { Content } from 'ionic-angular/components/content/content';
*/
import { MenuController } from 'ionic-angular/components/app/menu-controller';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController) {


  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(false);

  }
  logar() {
    console.log("logou......")
    this.navCtrl.push(PedidoPage)
  }
  assinar() {
    this.navCtrl.push(AssinarPage)
  }
}
