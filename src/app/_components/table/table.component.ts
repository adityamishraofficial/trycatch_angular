import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input('studentList') studentList: any;
  @Output('studentUpdate') studentUpdate = new EventEmitter()

  remove(index: any){
    this.studentList.splice(index, 1)
  }
}
