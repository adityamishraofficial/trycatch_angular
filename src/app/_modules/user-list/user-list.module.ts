import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from 'src/app/_components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';


const path: Routes = [
  {path: '', component: UserListComponent}
] 

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(path)
  ]
})
export class UserListModule { }
