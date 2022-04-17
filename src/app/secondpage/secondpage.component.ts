import { Component, OnInit } from '@angular/core';
import {FirstService} from "../firstpage/first.service";
import {UserModel} from "../firstpage/user.model";
import {GeneralModel} from "../firstpage/general/general.model";
import {EducationModel} from "../firstpage/education/education.model";
import {JobModel} from "../firstpage/job/job.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  userDetails: UserModel
  constructor(private firstService: FirstService) { }
  ngOnInit(): void {
    this.userDetails = this.firstService.getUserDetails();
    /*let date = new Date();
    let pipe = new DatePipe('en-US');
    console.log(pipe.transform(date, 'dd/MM/yyyy'));
    let abc = new Date(pipe.transform(date, 'dd/MM/yyyy'));
    console.log(abc)
    const user = new UserModel(
      new GeneralModel(
        'Vania',
        'Ceban',
        'vania@mail.com',
        '060038704',
        'Cernoleuca',
        'Java developer'
      ),
      ['https://www.facebook.com/alexsandu.mazureac', 'https://twitter.com/AlexandruMazur1'],
      [new EducationModel(
        'Java developer',
        new Date(new DatePipe('en-US').transform(new Date(), 'dd/MM/yyyy')),
        'master'
      ),
      new EducationModel(
        'Java developer',
        new Date(),
        'master'
      )],
      [new JobModel(
        'Java dev',
        new Date(),
        new Date(),
        'Chisinau',
        'Tekoway'
      )]
    );
    this.userDetails = user;*/
  }

  getWebName(link: string){
    return 'fa fa-' + link.replace(/.+\/\/|www.|\..+/g, '');
  }

}
