import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {GeneralFieldService} from "../../services/general-field.service";
import {RegisterService} from "../../services/register.service";
import {GeneralModel} from "../general.model";

@Component({
    selector: 'app-general-field',
    templateUrl: './general-field.component.html',
    styleUrls: ['./general-field.component.css']
})
export class GeneralFieldComponent implements OnInit {

    generalFieldFormGroup: FormGroup;
    @Input() isSubmitted: boolean;

    constructor(private fb: FormBuilder,
                private generalFieldService: GeneralFieldService,
                private registerService: RegisterService) {
    }

    ngOnInit(): void {
        this.generalFieldFormGroup = this.fb.group({
            'fields': this.fb.array([])
        });
        for (let i = 0; i < 6; i++) {
            let validators = this.generalFieldService.getValidators(i);
            this.generalFormArray.push(
                this.fb.group({
                    'inputField': this.fb.control('', validators)
                })
            )
        }
    }

    getPlaceholder(index: number) {
        return this.generalFieldService.getPlaceholder(index);
    }

    getErrorMessage(index: number) {
        return this.generalFieldService.getErrorMessage(index);
    }

    get generalFormArray(): FormArray {
        return <FormArray>this.generalFieldFormGroup.get('fields');
    }

    sendDataToService() {
        const newGeneral = new GeneralModel(
            this.generalFormArray.controls[0].get('inputField').value,
            this.generalFormArray.controls[1].get('inputField').value,
            this.generalFormArray.controls[2].get('inputField').value,
            this.generalFormArray.controls[3].get('inputField').value,
            this.generalFormArray.controls[4].get('inputField').value,
            this.generalFormArray.controls[5].get('inputField').value
        );
        this.registerService.addGeneral(newGeneral);
    }
}
