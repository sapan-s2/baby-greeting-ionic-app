import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MessageServiceProvider} from "../../providers/message-service/message-service";
import {MessageModel} from "../../providers/message-service/model/MessageModel";

/**
 * Generated class for the MesssgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messsge',
  templateUrl: 'messsge.html',
})
export class MesssgePage {

  message: string;
  messageModel: MessageModel;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public messageService: MessageServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesssgePage');
  }

  submitMessage(msg) {
    this.messageModel = new MessageModel();
    this.messageModel.set_message(msg);
    this.messageModel.set_emailId("ionic.email@test");
    this.messageModel.set_userName("ionic test");
    console.log('message submitted: '+ msg);
    this.messageService.addMesage( this.messageModel).subscribe( data => console.log("posted data" + data))



  }
}
