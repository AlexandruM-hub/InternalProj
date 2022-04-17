import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {FirstService} from "../first.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socialFormGroup: FormGroup;
  isSubmitted = false;
  constructor(private firtsService: FirstService) { }

  ngOnInit(): void {
    this.socialFormGroup = new FormGroup({
      'socials': new FormArray([])
    });
  }

  onAdd(){
    this.links.push(
      new FormGroup({
        'link': new FormControl('')
      })
    );
  }

  get links() : FormArray{
    return <FormArray>this.socialFormGroup.get('socials');
  }

  onDelete(index: number){
    this.links.removeAt(index);
  }

  onSubmit(){
    this.isSubmitted = true;
  }

  sendSocialToService(){
    this.links.controls.forEach(
      (form) => {
        this.firtsService.addSocialLinks(form.get('link').value);
      }
    );
  }


}
