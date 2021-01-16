import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  createdDate:string ;
  modifiedDAte: string;
  feedback : string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Frank M Canton', modifiedDAte: '01/02/2020', createdDate: '07/08/2020',feedback:''}
];

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'createdDate', 'modifiedDAte','feedback'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
