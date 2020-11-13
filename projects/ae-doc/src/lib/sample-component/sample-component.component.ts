import { Component } from '@angular/core';

@Component({
  selector: 'ae-sample-component',
  template: '<h3>{{name}}</h3>'
})
export class SampleComponentComponent {
  name = 'Your document will be shown here';
}
