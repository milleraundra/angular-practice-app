/**
 * Created by aundramiller on 4/18/17.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li>
        <app-listitem></app-listitem>   
      </li>
      <li>
        <app-listitem></app-listitem>   
      </li>
    </ul>`,
  // styleUrls: ['./list.component.css']
  styles: [`
    ul {
      list-style-type: none;
    }
  `]
})

export class ListComponent {

}
