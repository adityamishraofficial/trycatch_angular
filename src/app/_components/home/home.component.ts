import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService.studentValue.subscribe(res => {
      console.log('studentValue', res)
    })
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
}
