import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getStudentData(){
   return this.http.get('https://reqres.in/api/users?page=2')
  }
}
