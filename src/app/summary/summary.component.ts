import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../register/services/register.service";
import {UserModel} from "../register/user.model";
import {DataStorageService} from "../register/services/data-storage.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    userDetails: UserModel

    constructor(private registerService: RegisterService,
                private dataStorageService: DataStorageService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.userDetails = this.registerService.getUserDetails();
    }

    getWebName(link: string) {
        return 'fa fa-' + link.replace(/.+\/\/|www.|\..+/g, '');
    }

    onSave() {
        this.dataStorageService.sendDataToBack(this.userDetails);
    }

    onBackButton() {
        this.router.navigate(['../first']);
    }

}

//USER FOR TESTS NOT TO INSERT DATA EVERY TIME

/*this.userDetails = new UserModel(
            'Vania',
            'Ceban',
            'vania@mail.com',
            '060038704',
            'Cernoleuca',
            'Java developer'
            ,
            [
                new SocialModel('https://www.facebook.com/alexsandu.mazureac'),
                new SocialModel('https://twitter.com/AlexandruMazur1')
            ],
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
        );*/