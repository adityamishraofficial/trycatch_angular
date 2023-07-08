import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from './_services/data.service';
import { HttpService } from './_services/http.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = '';
  userList: any = [];

  constructor(private _dataService: DataService,
    private _httpService: HttpService,
    private loader: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.onGetUser()
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
}
