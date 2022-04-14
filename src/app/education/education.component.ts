import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../shared/validators.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../../styles.css']
})
export class EducationComponent implements OnInit {
  educationFormGroup: FormGroup;
  isSubmitted = false;

  constructor(private validationService: ValidatorsService) { }

  ngOnInit(): void {
    this.educationFormGroup = new FormGroup({
      'educations': new FormArray([])
    })
  }

  onAdd(){
    (<FormArray>this.educationFormGroup.get('educations')).push(
      new FormGroup({
        'title': new FormControl('', Validators.required),
        'date': new FormControl('', [Validators.required, this.validationService.dateValidator]),
        'type': new FormControl('', Validators.required)
      })
    );
    console.log(this.educations)
  }

  get educations() {
    return (<FormArray>this.educationFormGroup.get('educations')).controls;
  }

  onDelete(index: number){
    (<FormArray>this.educationFormGroup.get('educations')).removeAt(index);
  }

  onSubmit(){
    this.isSubmitted = true;
  }

}
