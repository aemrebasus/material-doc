import { Component, Input } from '@angular/core';
import { AeComponentView } from './ae-component-view/ae-component-view.component';

export interface AeDoc {
  name: string;
  description?: string;
  nav: AeComponentView[];
  inputs?: { name: string, description: string };
  events?: { name: string, description: string };
}

@Component({
  selector: 'ae-doc',
  templateUrl: './ae-doc.component.html',
  styleUrls: ['./ae-doc.component.scss']
})
export class AeDocComponent {
  @Input() input: AeDoc;
}

