/**
 * Created by aundramiller on 4/25/17.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['../../styles/assignment-one.css']
})

export class WarningAlertComponent {
  username = '';
  submit = false;

  onUpdateUsername(event: Event) {
    // this.submit = false;
    this.username = (<HTMLInputElement>event.target).value;
  }

  onUserNameSubmit() {
    this.submit = true;
    this.username = '';
  }
}
