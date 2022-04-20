import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {EducationComponent} from './register/education/education.component';
import {JobComponent} from './register/job/job.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GeneralComponent} from './register/general/general.component';
import {SocialComponent} from './register/social/social.component';
import {GeneralFieldComponent} from './register/general/general-field/general-field.component';
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from './register/register.component';
import {SummaryComponent} from './summary/summary.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
    {path: '', redirectTo: '/register', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'summary', component: SummaryComponent}
]


@NgModule({
    declarations: [
        AppComponent,
        EducationComponent,
        JobComponent,
        GeneralComponent,
        SocialComponent,
        GeneralFieldComponent,
        RegisterComponent,
        SummaryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
