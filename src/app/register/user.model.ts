import {EducationModel} from "./education/education.model";
import {JobModel} from "./job/job.model";
import {SocialModel} from "./social/social.model";

export class UserModel {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public address: string,
        public profession: string,
        public socialLinks: SocialModel[] = [],
        public educations: EducationModel[] = [],
        public jobs: JobModel[] = []
    ) {}

}
