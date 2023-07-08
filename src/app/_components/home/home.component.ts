import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/_services/data.service';
import { HttpService } from 'src/app/_services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = '';
  userList: any = [];

  constructor(private _dataService: DataService,
    private router: Router,
    private _httpService: HttpService,
    private loader: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this._dataService.studentValue.subscribe(res => {
      console.log('studentValue', res)
    })
    this.onGetUser()
  }  
  onNavigationToCategory(){
    // this._dataService.studentData = {
    //   firstName: 'vishal',`
    //   lastName: 'saini'
    // }
    this._dataService.setStudentValue({title: 'hello world'})
    // this._dataService.student = {
    //   firstName: 'vishal',
    //   lastName: 'saini'
    // }
    // this.router.navigateByUrl('/category')
  }



  onGetUser(){
    this.loader.show();
    this._httpService.getStudentData().subscribe((res: any) => {
      console.log('subscribe in')

      this.loader.hide();
      // if (res.data.length < 5) {
      //    this.userList = res.data;
      // }
      this.userList = res.data;
      console.log('Http Res', res)
    }, err => {
      this.loader.hide();
    })
  }

  onClick(){
    this._dataService.setStudentValue({firstName: 'Mehul', lastName: 'saini' })
  }
  onDelete(id: any){
    this._httpService.deleteStudentData(id).subscribe(res => {
      this.onGetUser()
    })
  }
  onLogout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }
}
