import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesssgePage } from './messsge';

@NgModule({
  declarations: [
    MesssgePage,
  ],
  imports: [
    IonicPageModule.forChild(MesssgePage),
  ],
})
export class MesssgePageModule {}
