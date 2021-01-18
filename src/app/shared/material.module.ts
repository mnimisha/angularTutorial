import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

const modules:MatIconModule[] = [
  MatIconModule,
  MatMenuModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
    
  ],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class MaterialModule { 
 
}
