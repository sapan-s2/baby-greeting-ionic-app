import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WallServiceProvider} from "../../providers/wall-service/wall-service";
import {WallData} from "./model/WallData";

/**
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
})
export class WallPage {

  // wallData: any;
  wallData = new WallData();
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private wallService: WallServiceProvider,) {


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WallPage');
  }

  ionViewDidEnter()  {
    this.getAllMessages();

  }


  getAllMessages() {
    this.wallService.getAllMessages()
      .subscribe( data =>  {
        console.log(data);
        this.wallData =

        data.data});
  }

}
