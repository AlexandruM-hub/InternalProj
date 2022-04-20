import {Injectable} from "@angular/core";
import {UserModel} from "../interfaces/user.model";
import {EducationModel} from "../interfaces/education.model";
import {JobModel} from "../interfaces/job.model";
import {GeneralModel} from "../interfaces/general.model";
import {SocialModel} from "../interfaces/social.model";
import {DatePipe} from "@angular/common";


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

    getEducationType(index: string): string {
        switch (index) {
            case '1':
                return 'Bachelor';
            case '2':
                return 'Superior';
            case '3':
                return 'Lyceum';
            default:
                return 'undefined';
        }
    }

    changeDateFormat(date: Date) {
        let pipe = new DatePipe('en-US');
        return pipe.transform(date, 'MM/dd/yyyy');
    }

}
