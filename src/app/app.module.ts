import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './_components/table/table.component';
import { HeaderComponent } from './_components/header/header.component';
import { HomeComponent } from './_components/home/home.component';
import { CategoryComponent } from './_components/category/category.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { DataComponent } from './_components/data/data.component';
import { DataService } from './_services/data.service';
import { HttpClientModule } from  '@angular/common/http';
import { HttpService } from './_services/http.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './_components/login/login.component';
import { CountPipe } from './_pipes/count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    SidebarComponent,
    DataComponent,
    LoginComponent,
    CountPipe,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
