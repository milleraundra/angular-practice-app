import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['../../styles/assignment-one.css']
})
export class SuccessAlertComponent implements OnInit {
  clickCount = 0;
  clickArray = [];
  showDetails = false;

  constructor() { }

  ngOnInit() {
  }

  onDisplayClick() {
    this.showDetails = !this.showDetails;
    this.clickArray.push(this.clickCount);
    this.clickCount++

  }

}
