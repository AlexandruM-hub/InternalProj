import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socialFormGroup: FormGroup;
  isSubmitted = false;
  constructor() { }

  ngOnInit(): void {
    this.socialFormGroup = new FormGroup({
      'socials': new FormArray([])
    });
  }

  onAdd(){
    (<FormArray>this.socialFormGroup.get('socials')).push(
      new FormGroup({
        'link': new FormControl('')
      })
    );
    console.log(this.links)
  }

  get links(){
    return (<FormArray>this.socialFormGroup.get('socials')).controls;
  }

  onDelete(index: number){
    (<FormArray>this.socialFormGroup.get('socials')).removeAt(index);
  }

  onSubmit(){
    this.isSubmitted = true;
  }


}
