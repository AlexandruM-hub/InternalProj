import {Component, Input, Output, ViewChild} from '@angular/core';
import {GeneralFieldComponent} from "./general-field/general-field.component";

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css'],
})
export class GeneralComponent {

    @Input() @Output() isSubmitted: boolean;
    @ViewChild(GeneralFieldComponent) common: GeneralFieldComponent;

}
