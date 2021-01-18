import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { CommonService, RoomData } from 'src/app/services/common.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  randomSeed: any[] = [];
  roomData: RoomData[] = [];
  lastMessage: string;
  subs: Subscription[] = [];
  @Output() seedValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private afs: AngularFirestore,
    private commonService: CommonService) { }

  ngOnInit(): void {

    // Generate 20 random values and store it in the randomSeed array
    this.randomSeed = Array.from({length: 20}, () => Math.floor(Math.random() * 14578976));

    // Fetching data from firestore
    this.subs.push(this.afs.collection('rooms').snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          return {
            id: a.payload.doc.id,
            // @ts-ignore
            ...a.payload.doc.data()
          };
        });
      })

    ).subscribe((rooms: RoomData[]) => {
      this.roomData = rooms;
      console.log(this.roomData);
    }));



  }

  onFormSubmit(form:NgForm): void{
    console.log(form.value.search);
  }


  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  seedData(ev: string): void {
    this.seedValue.emit(ev);
  }

  logout(): void {
    this.commonService.logout();
  }

}
