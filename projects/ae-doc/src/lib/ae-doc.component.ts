import { Component, Input, OnInit } from '@angular/core';
import { Nav } from './nav/nav.component';
import { DEFAULT_NAV_COMPONENT_INPUT } from './nav/sample.data';



export interface AeDoc extends Nav { }

@Component({
  selector: 'ae-doc',
  templateUrl: './ae-doc.component.html',
  styleUrls: ['./ae-doc.component.scss']
})
export class AeDocComponent implements OnInit {

  @Input() input: AeDoc = DEFAULT_NAV_COMPONENT_INPUT;

  constructor() { }

  ngOnInit(): void {
  }

}
