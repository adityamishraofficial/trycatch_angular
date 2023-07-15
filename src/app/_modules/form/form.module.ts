import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/_components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AbcComponentComponent } from 'src/app/_components/abc-component/abc-component.component';

const path: Routes = [
  {path: '', component: FormComponent },
  {path: 'abc', component: AbcComponentComponent}
]

@NgModule({
  declarations: [
    FormComponent,
    AbcComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(path)
  ]
})
export class FormModule { }
