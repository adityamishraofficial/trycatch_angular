import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      console.log('params', params.id)
    })

    this.activateRoute.queryParams.subscribe((params: any) => {
      console.log('query params', params)
    })
  }
}
