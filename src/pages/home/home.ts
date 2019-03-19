import { MessgProvider } from './../../providers/messg/messg';
import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private msg:MessgProvider) {
    this.getMessages();

  }

  getMessages(){
   this.msg.doGET();

  }

}
