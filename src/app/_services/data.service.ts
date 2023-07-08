import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private studentData = {};

  private studentObj = new BehaviorSubject(null);
  public studentValue = this.studentObj.asObservable()

  constructor() { }

  set student(value: any){
    this.studentData =  value
  }
  get student(){
    return this.studentData;
  }

  setStudentValue(value: any) {
    this.studentObj.next(value)
  }
  unSubStudentValue() {
    this.studentObj.unsubscribe()
  }
}
