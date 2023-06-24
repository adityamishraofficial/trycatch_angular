import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './_components/form/form.component';
import { HomeComponent } from './_components/home/home.component';
import { CategoryComponent } from './_components/category/category.component';
import { DataComponent } from './_components/data/data.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'data/:id', component: DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
