import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { JobComponent } from './job/job.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GeneralComponent } from './general/general.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    JobComponent,
    GeneralComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
