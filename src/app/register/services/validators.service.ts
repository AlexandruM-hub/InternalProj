import {Injectable} from "@angular/core";
import {AbstractControl, ValidationErrors} from "@angular/forms";
import {EducationComponent} from "../education/education.component";
import {GeneralComponent} from "../general/general.component";
import {JobComponent} from "../job/job.component";

@Injectable({providedIn: 'root'})
export class ValidatorsService{

    dateValidator(dateControl: AbstractControl): ValidationErrors | null {
        return new Date(dateControl.value) > new Date() ? { message: 'you can not put a future date' } : null;
    }

    groupDateValidator(group: AbstractControl): ValidationErrors | null {
        const startDate = group.get('enterDate');
        const endDate = group.get('endDate');
        return new Date(startDate.value) > new Date(endDate.value) ? { message: 'error message' } : null;
    }

    checkComponentsValidity(
        edComponent: EducationComponent,
        jobComponent: JobComponent,
        generalComponent: GeneralComponent
    ){
        return edComponent.educationFormGroup.valid &&
            edComponent.getEducationsFormArray.length > 0 &&
            jobComponent.jobsFormGroup.valid &&
            jobComponent.getJobsFormArray.length > 0 &&
            generalComponent.common.generalFormArray.valid;
    }
}
