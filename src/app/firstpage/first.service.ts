import {Injectable, OnInit} from "@angular/core";
import {UserModel} from "./user.model";
import {EducationModel} from "./education/education.model";
import {JobModel} from "./job/job.model";
import {GeneralModel} from "./general/general.model";


@Injectable({providedIn: 'root'})
export class FirstService implements OnInit{
  educations: EducationModel[] = [];
  jobs: JobModel[] = [];
  socialLinks: string[] = [];
  generalModel: GeneralModel;

  ngOnInit(): void {

  }

  addEducation(edModel: EducationModel){
    this.educations.push(edModel)
  }

  addJob(jobModel: JobModel){
    this.jobs.push(jobModel);
    console.log(this.jobs);
  }

  addSocialLinks(link: string){
    this.socialLinks.push(link);
  }

  addGeneral(generalModel: GeneralModel){
    this.generalModel = generalModel;
  }

  getUserDetails(){
    return new UserModel(
      this.generalModel,
      this.socialLinks,
      this.educations,
      this.jobs
    );
  }
}
