import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-general-field',
    templateUrl: './general-field.component.html',
    styleUrls: ['./general-field.component.css']
})
export class GeneralFieldComponent {

    @Input() isSubmitted: boolean;
    @Input() placeholder: string;
    @Input() control: FormControl;
    @Input() errorMessage: string;

}
