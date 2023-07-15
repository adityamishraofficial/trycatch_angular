import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './_components/form/form.component';
import { HomeComponent } from './_components/home/home.component';
import { CategoryComponent } from './_components/category/category.component';
import { DataComponent } from './_components/data/data.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate:[AuthGuard], component: HomeComponent},
  // {path: 'form', canActivate:[AuthGuard],  component: FormComponent},
  {path: 'form', canActivate:[AuthGuard], loadChildren: () => import('./_modules/form/form.module').then(m => m.FormModule) },
  {path: 'category', canActivate:[AuthGuard],  component: CategoryComponent},
  {path: 'data/:id', canActivate:[AuthGuard],  component: DataComponent},
  {path: 'user', loadChildren: () => import('./_modules/user-list/user-list.module').then(m => m.UserListModule) },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
