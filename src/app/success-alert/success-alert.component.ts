import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['../../styles/assignment-one.css']
})
export class SuccessAlertComponent implements OnInit {
  clickCount = 1;
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

  checkCount(number) {
    return number > 4;
    // console.log(number);
  }

}
