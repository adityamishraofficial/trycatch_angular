import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getStudentData(){
    let headers = new HttpHeaders();
    const token = String(localStorage.getItem('token'))
    headers = headers.set('auth', token);
   return this.http.get('https://reqres.in/api/users?page=2', {headers: headers}).pipe(map( (res: any) => {
    res.success = true;
    if (res.data.length > 5 ) {
      res.success = false;
    }
    return res
   }))
  }

  submitStudentData(payload: any) {
    return this.http.post('https://reqres.in/api/users', payload)
  }

  updateStudentData(payload: any) {
    return this.http.patch('https://reqres.in/api/users', payload)
  }

  deleteStudentData(id: any) {
    return this.http.delete('https://reqres.in/api/users/' + id)
  }

  login(userPayload: any){
    return this.http.post('https://dummyjson.com/auth/login', userPayload)
  }
}
