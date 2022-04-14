import {Component, ViewChild} from '@angular/core';
import {GeneralComponent} from "./general/general.component";
import {EducationComponent} from "./education/education.component";
import {JobComponent} from "./job/job.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  @ViewChild(GeneralComponent) generalComponent: GeneralComponent;
  @ViewChild(EducationComponent) educationComponent: EducationComponent;
  @ViewChild(JobComponent) jobsComponent: JobComponent;
  constructor() {}

  onSubmit() {
    this.generalComponent.onSubmit();
    this.educationComponent.onSubmit();
    this.jobsComponent.onSubmit();
  }
}
