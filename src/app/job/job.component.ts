import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {ValidatorsService} from "../shared/validators.service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobsFormGroup: FormGroup;
  isSubmitted = false;
  constructor(private validatorsService: ValidatorsService) { }

  ngOnInit(): void {
    this.jobsFormGroup = new FormGroup({
      'jobs': new FormArray([])
    });
  }

  onAdd(){
    (<FormArray>this.jobsFormGroup.get('jobs')).push(
      new FormGroup({
        'jobTitle': new FormControl('', Validators.required),
        'dates': new FormGroup({
          'enterDate': new FormControl('', [ Validators.required ,this.validatorsService.dateValidator]),
          'endDate': new FormControl('', [Validators.required, this.validatorsService.dateValidator]),
          'inPresent': new FormControl('')
        }, [this.validatorsService.groupDateValidator]),
        'city': new FormControl('', Validators.required),
        'companyName': new FormControl('', Validators.required)
      })
    );
    let len = this.jobs.length;
    if(len > 1 ){
      this.jobs[len-2].get('dates.inPresent').setValue(false);
      this.onChange(len-2, true);
    }
  }

  get jobs(){
    return (<FormArray>this.jobsFormGroup.get('jobs')).controls;
  }

  onDelete(index: number){
    (<FormArray>this.jobsFormGroup.get('jobs')).removeAt(index);
  }

  onSubmit(){
    this.isSubmitted = true;
  }

  //checkbox
  onChange(index: number, event: any){
    let flag: boolean;
    if(event == true){
      flag = false;
    } else {
      flag = event.target.checked;
    }
    const dateControl = this.jobs[index].get('dates.endDate')
    if(flag){
      dateControl.setValidators(null)
    } else {
      dateControl.setValidators([Validators.required, this.validatorsService.dateValidator]);
    }
    dateControl.updateValueAndValidity();
  }

}


