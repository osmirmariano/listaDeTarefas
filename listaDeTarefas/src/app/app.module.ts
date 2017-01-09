import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginProvider } from '../providers/login-provider';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDP9G77Jggs_cd3G81pxZqKZGYqckHiy28",
  authDomain: "listadordetarefas-c1b72.firebaseapp.com",
  databaseURL: "https://listadordetarefas-c1b72.firebaseio.com",
  storageBucket: "listadordetarefas-c1b72.appspot.com",
  messagingSenderId: "450162840323"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  providers: [
    LoginProvider
  ]
})
export class AppModule {
  constructor(){
   firebase.initializeApp(firebaseConfig);
  }
}
