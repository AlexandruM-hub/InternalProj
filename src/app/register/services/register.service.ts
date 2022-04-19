import {Injectable} from "@angular/core";
import {UserModel} from "../user.model";
import {EducationModel} from "../education/education.model";
import {JobModel} from "../job/job.model";
import {GeneralModel} from "../general/general.model";
import {SocialModel} from "../social/social.model";


@Injectable({providedIn: 'root'})
export class RegisterService {

    educations: EducationModel[] = [];
    jobs: JobModel[] = [];
    socialLinks: SocialModel[] = [];
    generalModel: GeneralModel;

    addEducation(edModel: EducationModel) {
        this.educations.push(edModel)
    }

    addJob(jobModel: JobModel) {
        this.jobs.push(jobModel);
        console.log(this.jobs);
    }

    addSocialLinks(link: string) {
        this.socialLinks.push(new SocialModel(link));
    }

    addGeneral(generalModel: GeneralModel) {
        this.generalModel = generalModel;
    }

    getUserDetails() {
        return new UserModel(
            this.generalModel.firstName,
            this.generalModel.lastName,
            this.generalModel.email,
            this.generalModel.phone,
            this.generalModel.address,
            this.generalModel.profession,
            this.socialLinks,
            this.educations,
            this.jobs
        );
    }

}
