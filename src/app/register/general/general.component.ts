import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../services/register.service";
import {GeneralModel} from "../interfaces/general.model";

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {

    @Input() isSubmitted: boolean;
    generalFormGroup: FormGroup;

    constructor(private fb: FormBuilder,
                private registerService: RegisterService) {
    }

    ngOnInit(): void {
        this.generalFormGroup = this.fb.group({
            firstNameControl: this.fb.control('', Validators.required),
            lastNameControl: this.fb.control('', Validators.required),
            emailControl: this.fb.control('', [Validators.required, Validators.email]),
            phoneControl: this.fb.control('', [Validators.required, Validators.pattern('([+](373)|(0))(\\d{8})')]),
            addressControl: this.fb.control('', Validators.required),
            professionControl: this.fb.control('', Validators.required)
        });
    }

    public getControl(name: string): FormControl {
        return this.generalFormGroup.get(name) as FormControl;
    }

    sendGeneralModelToService() {
        this.registerService.addGeneral(this.getModelFromControls());
    }

    getModelFromControls(): GeneralModel {
        return new GeneralModel(
            this.generalFormGroup.get('firstNameControl').value,
            this.generalFormGroup.get('lastNameControl').value,
            this.generalFormGroup.get('emailControl').value,
            this.generalFormGroup.get('phoneControl').value,
            this.generalFormGroup.get('addressControl').value,
            this.generalFormGroup.get('professionControl').value,
        );
    }
}
