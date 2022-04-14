import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  @ViewChild('f', {static: false}) public generalForm: NgForm;
  isSubmitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(){
    this.isSubmitted = true;
    console.log(this.generalForm.value)
  }
}
