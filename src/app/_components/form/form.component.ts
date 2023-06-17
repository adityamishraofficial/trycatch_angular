import { Component } from '@angular/core';
import { FormData } from 'src/app/_models/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  abc: string;
  formData: FormData = {
    firstName: '',
    lastName: '',
    rollNumber: '',
    result: ''
  }


  studentList: FormData[] = [];
  constructor(){
  }

  onSubmit(formData: FormData){
    const studentObj = {...this.formData}
    this.studentList.push(studentObj)
    this.formData = {
      firstName: '',
      lastName: '',
      rollNumber: '',
      result: ''
    }
  }

}
