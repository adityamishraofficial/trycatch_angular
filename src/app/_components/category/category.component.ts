import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private _dataSerive: DataService){}
  ngOnInit(): void {
    // this._dataSerive.studentValue.subscribe(res => {
    //   console.log('category studentValue', res)
    // })
    // console.log('Student data', this._dataSerive.student)
    // this._dataSerive.unSubStudentValue();
  }
}
