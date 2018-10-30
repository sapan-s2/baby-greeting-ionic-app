import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {WallPage} from "../wall/wall";
import {PrivacyPage} from "../privacy/privacy";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WallPage;
  tab3Root = PrivacyPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
