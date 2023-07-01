import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  studentForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: [{value:'', disabled: true}, [Validators.required, Validators.minLength(5)]],
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
    console.log('payload', payload)
  }

  onUpdate() {

    this.studentForm.setValue({
      firstName: 'ravi',
      lastName: 'sharma',
      rollNumber: '13213',
      result: 'pass'
    })
    // this.studentForm.patchValue({
    //   firstName: 'aditya',
    //   lastName: '2342'
    // })
  }

 
}
