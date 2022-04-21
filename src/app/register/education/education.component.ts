import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../services/validators.service";
import {RegisterService} from "../services/register.service";
import {EducationModel} from "../interfaces/education.model";

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    educationFormGroup: FormGroup;
    @Input() isSubmitted: boolean;

    constructor(private validationService: ValidatorsService,
                private fb: FormBuilder,
                private registerService: RegisterService) {
    }

    ngOnInit(): void {
        this.educationFormGroup = this.fb.group({
            'educations': this.fb.array([])
        });
    }

    onAdd() {
        this.getEducationsFormArray.push(
            this.fb.group({
                'title': this.fb.control('', Validators.required),
                'date': this.fb.control('', [Validators.required, this.validationService.dateValidator]),
                'type': this.fb.control('', Validators.required)
            })
        );
    }

    get getEducationsFormArray(): FormArray {
        return <FormArray>this.educationFormGroup.get('educations');
    }

    onDelete(index: number) {
        this.getEducationsFormArray.removeAt(index);
    }

    sendEducationsToService() {
        this.getEducationsFormArray.controls.forEach(
            (form) => {
                const newEducation = new EducationModel(
                    form.get('title').value,
                    this.registerService.changeDateFormat(form.get('date').value),
                    this.registerService.getEducationType(form.get('type').value)
                );
                this.registerService.addEducation(newEducation);
            }
        );
    }

}
