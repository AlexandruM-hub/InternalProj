import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    firstNameControl = this.fb.control('', Validators.required);
    lastNameControl = this.fb.control('', Validators.required);
    emailControl = this.fb.control('', [Validators.required, Validators.email]);
    phoneControl = this.fb.control('', [Validators.required, Validators.pattern('([+](373)|(0))(\\d{8})')]);
    addressControl = this.fb.control('', Validators.required);
    professionControl = this.fb.control('', Validators.required);

    constructor(private fb: FormBuilder,
                private registerService: RegisterService) {
    }

    ngOnInit(): void {
        this.generalFormGroup = this.fb.group({
            firstNameControl: this.firstNameControl,
            lastNameControl: this.lastNameControl,
            emailControl: this.emailControl,
            phoneControl: this.phoneControl,
            addressControl: this.addressControl,
            professionControl: this.professionControl
        });
    }

    sendGeneralModelToService() {
        this.registerService.addGeneral(new GeneralModel(
            this.firstNameControl.value,
            this.lastNameControl.value,
            this.emailControl.value,
            this.phoneControl.value,
            this.addressControl.value,
            this.professionControl.value
        ));
    }
}
