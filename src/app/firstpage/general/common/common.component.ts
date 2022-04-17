import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "./common.service";
import {FirstService} from "../../first.service";
import {GeneralModel} from "../general.model";

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  commonFormGroup: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder,
              private commonService: CommonService,
              private firstService: FirstService) { }

  ngOnInit(): void {
    this.commonFormGroup = this.fb.group({
      'fields': this.fb.array([])
    });
    for(let i =0; i< 6; i++){
      let validators = this.commonService.getValidators(i);
      this.generalFormArray.push(
        this.fb.group({
          'inputField': this.fb.control('', validators)
        })
      )
    }
  }

  getPlaceholder(index: number){
    return this.commonService.getPlaceholder(index);
  }

  getErrorMessage(index: number){
    return this.commonService.getErrorMessage(index);
  }

  get generalFormArray(): FormArray{
    return <FormArray>this.commonFormGroup.get('fields');
  }

  onSubmit(){
    this.isSubmitted = true;
    console.log(this.generalFormArray.controls);
  }

  sendDataToService(){
    const newGeneral = new GeneralModel(
      this.generalFormArray.controls[0].get('inputField').value,
      this.generalFormArray.controls[1].get('inputField').value,
      this.generalFormArray.controls[2].get('inputField').value,
      this.generalFormArray.controls[3].get('inputField').value,
      this.generalFormArray.controls[4].get('inputField').value,
      this.generalFormArray.controls[5].get('inputField').value
    );
    this.firstService.addGeneral(newGeneral);
  }
}
