import {Injectable} from "@angular/core";
import {Validators} from "@angular/forms";

@Injectable({providedIn: "root"})
export class CommonService {

  getPlaceholder(index: number){
    switch (index){
      case 0:
        return 'First name';
      case 1:
        return 'Last name';
      case 2:
        return 'Email';
      case 3:
        return 'Phone (+373 ...)';
      case 4:
        return 'Physical Address';
      case 5:
        return 'Profession';
      default:
        return '';
    }
  }

  getErrorMessage(index: number){
    if (index == 2) {
      return 'Please enter a valid email';
    } else if (index == 3){
      return 'Please enter a valid phone number';
    } else {
      return 'Please complete the field'
    }
  }

  getValidators(i: number){
    if (i == 2) {
      return [Validators.required, Validators.email]
    } else if (i == 3){
      return [Validators.required, Validators.pattern('([+](373)|(0))(\\d{8})')]
    } else {
      return [Validators.required]
    }
  }
}
