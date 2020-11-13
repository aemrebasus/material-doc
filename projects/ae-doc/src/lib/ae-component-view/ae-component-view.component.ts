import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { IconType } from 'ng-icon-type';

/**
 * @param(string)   name of the component
 * @param(string)   HTML of the component
 * @param(string)   CSS of the component
 * @param(string)   TS of the component
 * @param(any)      component class
 */
export interface AeComponentView {
  name: string;
  description?: string;
  module?: string;
  HTML?: string;
  CSS?: string;
  TS?: string;
  component?: any;
}

@Component({
  selector: 'ae-component-view',
  templateUrl: './ae-component-view.component.html',
  styleUrls: ['./ae-component-view.component.scss'],
})
export class AeComponentViewComponent implements OnInit, AfterViewInit {

  /**
   * @Input
   */
  @Input() input: AeComponentView;

  /**
   * @Internal
   */
  openCodeIcon: IconType = 'code';

  /**
   * @Internal
   */
  copyIcon: IconType = 'content_copy';

  /**
   * @Internal
   */
  contentVisible = false;


  constructor() {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

}
