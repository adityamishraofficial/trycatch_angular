import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from 'src/app/_components/shared/shared.component';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ], 
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedComponent
  ]
})
export class SharedModule { }
