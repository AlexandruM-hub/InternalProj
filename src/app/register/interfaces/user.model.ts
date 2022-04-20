import {EducationModel} from "./education.model";
import {JobModel} from "./job.model";
import {SocialModel} from "./social.model";

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
    ) {
    }

}
