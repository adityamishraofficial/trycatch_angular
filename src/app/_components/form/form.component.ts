import { Component } from '@angular/core';
import { FormData } from 'src/app/_models/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formData: FormData = {
    firstName: '',
    lastName: '',
    rollNumber: '',
    result: ''
  }
  isEdit = false;
  studentList: FormData[] = [];
  currentActivatedIndex = 0
  constructor(){
  }

  onSubmit(){
    const studentObj = {...this.formData}
    this.studentList.push(studentObj)
    this.formData = {
      firstName: '',
      lastName: '',
      rollNumber: '',
      result: ''
    }
  }

  onEdit(index: number) {
    this.currentActivatedIndex = index;
    this.isEdit = true;
    this.formData = {...this.studentList[this.currentActivatedIndex]}
  }
  onUpdate(formData: FormData) {
    const studentObj = {...formData}
    this.studentList[this.currentActivatedIndex] = studentObj;
    this.isEdit = false;
    this.formData = {
      firstName: '',
      lastName: '',
      rollNumber: '',
      result: ''
    }
    this.currentActivatedIndex = 0
  }
 
}
