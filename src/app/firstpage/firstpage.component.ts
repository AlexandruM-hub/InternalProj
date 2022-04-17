import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {GeneralComponent} from "./general/general.component";
import {EducationComponent} from "./education/education.component";
import {JobComponent} from "./job/job.component";
import {ValidatorsService} from "./shared/validators.service";
import {SocialComponent} from "./social/social.component";

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
  @ViewChild(GeneralComponent) generalComponent: GeneralComponent;
  @ViewChild(EducationComponent) educationComponent: EducationComponent;
  @ViewChild(JobComponent) jobsComponent: JobComponent;
  @ViewChild(SocialComponent) socialComponent: SocialComponent;

  constructor(private router: Router, private validationService: ValidatorsService) {}

  onSubmit() {
    this.generalComponent.onSubmit();
    this.educationComponent.onSubmit();
    this.jobsComponent.onSubmit();


    if(this.validationService.checkComponentsValidity(this.educationComponent, this.jobsComponent, this.generalComponent)){
      this.generalComponent.sendDataToService();
      this.educationComponent.sendEducationsToService();
      this.jobsComponent.sendJobsToService();
      this.socialComponent.sendSocialToService();
      this.router.navigate(['../second']);
    }
  }

}
