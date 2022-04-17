import {EducationModel} from "./education/education.model";
import {JobModel} from "./job/job.model";
import {GeneralModel} from "./general/general.model";

export class UserModel {
  constructor(
    public generalModel: GeneralModel,
    public socialLinks: string[] = [],
    public educations: EducationModel[] = [],
    public jobs: JobModel[] = []
  ) {}
}
