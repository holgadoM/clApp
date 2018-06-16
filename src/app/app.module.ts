import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { AgregarPage } from "../pages/agregar/agregar";
import { EditarPage } from "../pages/editar/editar";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from "angularfire2/firestore";

//services
import { ManejoClavesProvider } from "../providers/manejo-claves/manejo-claves";
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ToAstProvider } from '../providers/to-ast/to-ast';

const config = {
  apiKey: "AIzaSyA28YbKtWV07bZdw4womMr6bnPA-hcQG9U",
  authDomain: "clapp-2b59b.firebaseapp.com",
  databaseURL: "https://clapp-2b59b.firebaseio.com",
  projectId: "clapp-2b59b",
  storageBucket: "clapp-2b59b.appspot.com",
  messagingSenderId: "257251618634"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AgregarPage,
    EditarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config), // <-- firebase here
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AgregarPage,
    EditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ManejoClavesProvider,
    GooglePlus,
    UsuarioProvider,
    ToAstProvider
  ]
})
export class AppModule {}
