import {Injectable} from "@angular/core";
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class ValidatorsService{

  constructor() {
  }

  dateValidator(dateControl: AbstractControl): ValidationErrors | null {
    return new Date(dateControl.value) > new Date() ? { message: 'you can not put a future date' } : null;
  }

  groupDateValidator(group: AbstractControl): ValidationErrors | null {
    const startDate = group.get('enterDate');
    const endDate = group.get('endDate');
    return new Date(startDate.value) > new Date(endDate.value) ? { message: 'error message' } : null;
  }

}
