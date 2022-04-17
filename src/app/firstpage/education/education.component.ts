import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../shared/validators.service";
import {FirstService} from "../first.service";
import {EducationModel} from "./education.model";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../../../styles.css']
})
export class EducationComponent implements OnInit {
  educationFormGroup: FormGroup;
  isSubmitted = false;

  constructor(private validationService: ValidatorsService,
              private fb: FormBuilder,
              private firstService: FirstService) { }

  ngOnInit(): void {
    this.educationFormGroup = this.fb.group({
      'educations': this.fb.array([])
    });
  }

  onAdd(){
    this.getEducationsFormArray.push(
      this.fb.group({
        'title' : this.fb.control('', Validators.required),
        'date': this.fb.control('', [Validators.required, this.validationService.dateValidator]),
        'type': this.fb.control('', Validators.required)
      })
    );
  }

  get getEducationsFormArray(): FormArray {
    return <FormArray>this.educationFormGroup.get('educations');
  }

  onDelete(index: number){
    this.getEducationsFormArray.removeAt(index);
  }

  onSubmit(){
    this.isSubmitted = true;
  }

  sendEducationsToService(){
    this.getEducationsFormArray.controls.forEach(
      (form) => {
        const newEducation = new EducationModel(
          form.get('title').value,
          form.get('date').value,
          this.getEducationType(form.get('type').value)
        );
        this.firstService.addEducation(newEducation);
      }
    );
  }

  getEducationType(index: string): string{
    switch (index){
      case '1':
        return 'Bachelor';
      case '2':
        return 'Superior';
      case '3':
        return 'Lyceum';
      default:
        return 'undefined';
    }
  }
}
