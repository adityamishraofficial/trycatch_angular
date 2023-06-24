import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './_components/form/form.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './_components/table/table.component';
import { HeaderComponent } from './_components/header/header.component';
import { HomeComponent } from './_components/home/home.component';
import { CategoryComponent } from './_components/category/category.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { DataComponent } from './_components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    SidebarComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
