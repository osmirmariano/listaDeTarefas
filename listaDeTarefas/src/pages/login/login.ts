import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { Credencial } from '../../model/credencial';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	credencial: Credencial;

constructor(public navCtrl: NavController, public navParams: NavParams,
  	public loginProvider: LoginProvider) {}

	ionViewDidLoad() {
		this.credencial = new Credencial();
	  	this.loginProvider.loginSucessoEventEmitter.subscribe{
	  		user => console.log(user);
	  	}
	  	this.loginProvider.loginFalhaEventEmitter.subscribe{
	  		erro => console.log(erro);
	  	}
	}

	loginComCredencial(){
		this.loginProvider.loginComCredencial(this.credencial);
	}

	loginComGoogle(){
		this.loginProvider.loginComGoogle();
	}

	doRegistrar(){
  		this.navCtrl.push(RegistrarPage);
  	}
}
