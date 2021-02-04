import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'for-lodash';
  array = [1];
  other = [1];

  lodash_test() {
    this.other = _.concat(this.array, 2, [3], [4]);
  }
}
