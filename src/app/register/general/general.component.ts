import {Component, ViewChild} from '@angular/core';
import {GeneralFieldComponent} from "./general-field/general-field.component";

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css'],
})
export class GeneralComponent {

    @ViewChild(GeneralFieldComponent) common: GeneralFieldComponent;

}
