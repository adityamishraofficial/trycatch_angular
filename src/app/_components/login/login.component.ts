import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/_services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _httpService: HttpService,
    private router: Router) {}
  errMsg = '';
  userForm = {
    username: '',
    password: ''
  }

  onSubmit() {
  
    this._httpService.login(this.userForm).subscribe((res: any) => {
      this.errMsg = ''
      localStorage.setItem('token', res.token)
      this.router.navigateByUrl('/home')
    }, err => {
      console.log('err', err)
      this.errMsg = err.error.message
    })
  }
}
