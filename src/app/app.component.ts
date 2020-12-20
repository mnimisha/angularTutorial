import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProject';

  readMe() {
    console.log('button clicked');
  }
  showMsg =true;
  colorName='green';
  switchValue=6;
  users =[
    {id :10, name :'john'},
    {id :20, name:'james'},
    {id :30, name:'jack'},
    {id :40, name:'jerri'}
  ]
  colorVal='blue';
 
}
