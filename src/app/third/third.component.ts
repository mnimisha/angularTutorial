import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface FeedbackTable {
  questions: string;
  excellent: string;
  average:string ;
  poor: string;
   vpoor: string;
}
const ELEMENT_DATA: FeedbackTable[] = [
  {questions: 'How satisfied are you with this application?', excellent: '',average:'',poor:'',vpoor:''},
  {questions: 'How satisfied are you with this clinic services?', excellent: '',average:'',poor:'',vpoor:''},
  {questions: 'How satisfied are you with our clinician services?', excellent: '',average:'',poor:'',vpoor:''},
  {questions: 'How would you rate our clinic on value for money?', excellent: '',average:'',poor:'',vpoor:''}
]

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  displayedColumns: string[] = ['questions', 'excellent', 'good', 'average','poor','vpoor'];
  dataSource = ELEMENT_DATA;
 // submitForm: FormGroup; 


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
