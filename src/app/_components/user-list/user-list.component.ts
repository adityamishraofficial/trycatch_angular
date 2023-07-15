import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from 'src/app/_services/http.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  title = '';
  studentForm: FormGroup;
  submitted = false;
  errorMsg = '';
  constructor(private formBuilder: FormBuilder,
    private loader: NgxSpinnerService,
    private router: Router,
    private _httpService: HttpService){
  }
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', Validators.required],
      rollNumber: ['', Validators.required],
      result: ['', Validators.required]
    })
  }
  get f () { return this.studentForm.controls;}
  onSubmit(){
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
    }
    const payload = this.studentForm.value;
    this.loader.show()
    this._httpService.submitStudentData(payload).subscribe(res => {
      this.loader.hide()
      this.router.navigateByUrl('/category')
      console.log('submitStudentData', res)
    }, err => {
      this.loader.hide()
    })
  }

  onUpdate() {
    this.studentForm.setValue({
      firstName: 'ravi',
      lastName: 'sharma',
      rollNumber: '13213',
      result: 'pass'
    })
    this.loader.show()
    this._httpService.updateStudentData(this.studentForm.value).subscribe(res => {
      this.loader.hide()
      console.log('updateStudentData', res)
    }, err => {
      this.loader.hide()
      this.errorMsg = err.message
      console.log('Error::::updateStudentData', err)
    })
    // this.studentForm.patchValue({
    //   firstName: 'aditya',
    //   lastName: '2342'
    // })
  }

}
