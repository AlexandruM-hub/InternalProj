import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {GeneralComponent} from "./general/general.component";
import {EducationComponent} from "./education/education.component";
import {JobComponent} from "./job/job.component";
import {ValidatorsService} from "./services/validators.service";
import {SocialComponent} from "./social/social.component";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    @ViewChild(GeneralComponent) generalComponent: GeneralComponent;
    @ViewChild(EducationComponent) educationComponent: EducationComponent;
    @ViewChild(JobComponent) jobsComponent: JobComponent;
    @ViewChild(SocialComponent) socialComponent: SocialComponent;

    toSubmit = false;

    constructor(
        private router: Router,
        private validationService: ValidatorsService
    ) {
    }

    onSubmit() {
        this.toSubmit = true;
        if (this.validationService.checkComponentsValidity(
            this.educationComponent,
            this.jobsComponent,
            this.generalComponent)) {

            this.generalComponent.sendGeneralModelToService();
            this.educationComponent.sendEducationsToService();
            this.jobsComponent.sendJobsToService();
            this.socialComponent.sendSocialToService();

            this.router.navigate(['../summary']);
        }
    }

}
