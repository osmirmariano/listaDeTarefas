import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login-provider';
import { Credencial } from '../../model/credencial';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html'
})
export class RegistrarPage {
	credencial:Credencial;
	constructor(
	  	public navCtrl: NavController, 
		public loginProvider: LoginProvider) {
		this.credencial = new Credencial();
	}

	doRegister(){
		this.loginProvider.registrarUsuario(this.credencial);
	}
}
