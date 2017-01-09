import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Credencial } from '../model/credencial';
import firebase from 'firebase';

@Injectable()
export class LoginProvider {
	currentUser:any;
	autenticado:boolean;
	loginSucessoEventEmitter:EventEmitter<any>;
	loginFalhaEventEmitter:EventEmitter<any>;
	logoutEventEmitter:EventEmitter<any>;

	constructor(public http: Http, public ngZone) {
	    this.loginSucessoEventEmitter = EventEmitter();
	    this.loginFalhaEventEmitter = EventEmitter();
	    this.logoutEventEmitter = EventEmitter();
	    firebase.auth().onAuthStateChange(usuario => {
	    	this.callbackStateChange(usuario);
	    })
	}

	private callbackStateChange(usuario){
		this.ngZone.run( () => {
			if(usuario == null){
				this.currentUser = null;
				this.autenticado = false;
			}
			else{
				this.currentUser = usuario;
				this.autenticado = true;
			}
		})
	}

	loginComCredencial(credencial:Credencial){
		firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
			.then(resultado => this.callbackSucessoLogin(resultado))
			.catch(erro => this.callbackFalhaLogin(erro))
	}

	loginGoogle(){
		let provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
			.then(resultado => this.callbackSucessoLogin(resultado))
			.catch(erro => this.callbackFalhaLogin(erro))
	}

	registrarUsuario(credencial:Credencial){
	  	firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
	  		.then(result => console.log(result))
	  		.catch(error => console.log(error))
	}

	private callbackSucessoLogin(response){
		this.loginSucessoEventEmitter.emit(response.user);
	}

	private callbackFalhaLogin(erro){
		this.loginFalhaEventEmitter.emit([code; erro.code, message: erro.message, email: erro.email, credencial: erro.credencial]);
	}
}
