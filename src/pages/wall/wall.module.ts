import {NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WallPage } from './wall';
import {WallServiceProvider} from "../../providers/wall-service/wall-service";
import {WallData} from "./model/WallData";

@NgModule({
  declarations: [
    WallPage,
  ],
  imports: [
    IonicPageModule.forChild(WallPage),
  ],
})
export class WallPageModule {



}
