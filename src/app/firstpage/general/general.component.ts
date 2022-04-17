import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonComponent} from "./common/common.component";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  @ViewChild(CommonComponent) common: CommonComponent;
  isSubmitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(){
    this.isSubmitted = true;
    this.common.onSubmit();
  }

  sendDataToService(){
    this.common.sendDataToService();
  }
}
