import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';



@NgModule({
  declarations: [CompletedTasksComponent],
  exports:[CompletedTasksComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
