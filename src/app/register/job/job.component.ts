import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../services/validators.service";
import {JobModel} from "./job.model";
import {RegisterService} from "../services/register.service";

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

    jobsFormGroup: FormGroup;
    isSubmitted = false;

    constructor(private validatorsService: ValidatorsService,
                private fb: FormBuilder,
                private registerService: RegisterService) {
    }

    ngOnInit(): void {
        this.jobsFormGroup = new FormGroup({
            'jobs': new FormArray([])
        });
    }

    onAdd() {
        this.getJobsFormArray.push(
            this.fb.group({
                'jobTitle': this.fb.control('', Validators.required),
                'dates': new FormGroup({
                    'enterDate': this.fb.control('', [Validators.required, this.validatorsService.dateValidator]),
                    'endDate': this.fb.control('', [Validators.required, this.validatorsService.dateValidator]),
                    'inPresent': this.fb.control('')
                }, [this.validatorsService.groupDateValidator]),
                'city': this.fb.control('', Validators.required),
                'companyName': this.fb.control('', Validators.required)
            })
        );
        let len = this.jobsControls.length;
        if (len > 1) {
            this.jobsControls[len - 2].get('dates.inPresent').setValue(false);
            this.onChange(len - 2, true);
        }
    }

    get jobsControls() {
        return this.getJobsFormArray.controls;
    }

    get getJobsFormArray(): FormArray {
        return <FormArray>this.jobsFormGroup.get('jobs');
    }

    onDelete(index: number) {
        this.getJobsFormArray.removeAt(index);
    }

    onSubmit() {
        this.isSubmitted = true;
    }

    //checkbox
    onChange(index: number, event: any) {
        let flag: boolean;
        if (event == true) {
            flag = false;
        } else {
            flag = event.target.checked;
        }
        const dateControl = this.jobsControls[index].get('dates.endDate');
        if (flag) {
            dateControl.setValidators(null);
            dateControl.setValue('');
        } else {
            dateControl.setValidators([Validators.required, this.validatorsService.dateValidator]);
        }
        dateControl.updateValueAndValidity();
    }

    sendJobsToService() {
        this.getJobsFormArray.controls.forEach(
            (form) => {
                const jobModel = new JobModel(
                    form.get('jobTitle').value,
                    form.get('dates.enterDate').value,
                    form.get('dates.endDate').value ? form.get('dates.endDate').value : new Date(),
                    form.get('city').value,
                    form.get('companyName').value
                );
                this.registerService.addJob(jobModel);
            }
        )
    }

}


