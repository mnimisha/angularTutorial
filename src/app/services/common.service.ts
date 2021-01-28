import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { __values } from 'tslib';
import { Router } from '@angular/router';
/*
import { url } from 'inspector';*/
//import {User} from 'firebase';
import {User} from '@firebase/auth-types';
//import {auth} from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //1.authentication  
  //2.store route param value

  private pathParamState : BehaviorSubject<string> = new BehaviorSubject<string>('');
  pathParam:Observable<string>;

  //angular fire user
  private user: User;
 

  constructor(private afs:AngularFirestore,
              private afAuth:AngularFireAuth,
              private router:Router) {
                this.pathParam = this.pathParamState.asObservable();

                this.afAuth.authState.subscribe(user  =>{
                  if(user){
                    this.user = user;
                    localStorage.setItem('user', JSON.stringify(this.user));
                    this.router.navigateByUrl('').then();
                  }
                  else{
                    localStorage.setItem('user',null);
                  }
                });
               }


               loginWithGoogle(): void{
                this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((data: UserCredential) =>{
                  if (data.user){
                    this.user = data.user;
                    localStorage.setItem('user',JSON.stringify(this.user));
                    this.router.navigateByUrl('').then();
                  }
                  else{
                    localStorage.setItem('user',null);
                  }
                });
              }

              logout(): void{
                this.afAuth.signOut().then(() =>{
                   localStorage.removeItem('user');
                   this.router.navigateByUrl('/login').then()
                });
              }

  updatePathParamState(newPathParam: string): void{
      this.pathParamState.next(newPathParam);
    
  }

  getUser():User{
    return this.user; 
  }

}

export interface RoomData {
  name: string;
  id?: string;
}
