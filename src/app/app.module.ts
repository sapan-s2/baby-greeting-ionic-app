import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MesssgePage} from "../pages/messsge/messsge";
import {WallPage} from "../pages/wall/wall";
import {PrivacyPage} from "../pages/privacy/privacy";
import { UserDataProvider } from '../providers/user-data/user-data';
import { MessageServiceProvider } from '../providers/message-service/message-service';
import {HttpClientModule} from "@angular/common/http";
import { WallServiceProvider } from '../providers/wall-service/wall-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MesssgePage,
    WallPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrivacyPage,
    WallPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    MessageServiceProvider,
    HttpClientModule,
    WallServiceProvider
  ]
})
export class AppModule {}
