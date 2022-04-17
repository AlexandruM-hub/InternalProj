import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EducationComponent } from './firstpage/education/education.component';
import { JobComponent } from './firstpage/job/job.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GeneralComponent } from './firstpage/general/general.component';
import { SocialComponent } from './firstpage/social/social.component';
import { CommonComponent } from './firstpage/general/common/common.component';
import {RouterModule, Routes} from "@angular/router";
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full'},
  { path: 'first', component: FirstpageComponent },
  { path: 'second', component: SecondpageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    JobComponent,
    GeneralComponent,
    SocialComponent,
    CommonComponent,
    FirstpageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
