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
    private _httpSerice: HttpService,
    private loader: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.loader.show();
    this._httpSerice.getStudentData().subscribe((res: any) => {
      this.loader.hide();
      console.log('Http Res', res)
      this.userList = res.data;
    }, err => {
      this.loader.hide();
    })
  }

  onClick(){
    this._dataService.setStudentValue({firstName: 'Mehul', lastName: 'saini' })
  }

}
