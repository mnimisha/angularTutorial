import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {
  @Input() randomSeed: string;
  subs: Subscription;
  paramValue: string;
  roomName: string;


  constructor(private commonService: CommonService,
    private afs: AngularFirestore) { }

  ngOnInit(): void {

    this.subs = this.commonService.pathParam.subscribe(value => {
      this.paramValue = value;
      console.log(this.paramValue);
    });

  }

  formSubmit(form:NgForm): void{
    console.log('');
    if (form.invalid) {
      return;
    }

    const {message} = form.value;
    form.resetForm();

    this.afs.collection('rooms').doc(this.paramValue).collection('messages').add({
      message,
      user_id: this.commonService.getUser().uid,
      name: this.commonService.getUser().displayName,
      time: firebase.firestore.FieldValue.serverTimestamp()
    });


  }
}