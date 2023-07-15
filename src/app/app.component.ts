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
  date = new Date();
  title = 'hello world'
  currency = 10000;
  imgSrc = 'https://fastly.picsum.photos/id/892/200/300.jpg?hmac=9MUtm-RM2UIFVmP8I80S9TuWKk93ZEPqQLpOf-y1BwE';
  number = '8500000000'
  obj = {
    'title': 'name',
    'desc': 'hello'
  }
  ngOnInit(): void {
    
  }
}
