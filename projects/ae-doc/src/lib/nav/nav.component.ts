import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AeComponentView } from '../ae-component-view/ae-component-view.component';
import { DEFAULT_NAV_COMPONENT_INPUT } from './sample.data';



export interface Nav {
  name: string;
  menu: AeComponentView[];
}

@Component({
  selector: 'ae-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() input: Nav = DEFAULT_NAV_COMPONENT_INPUT;

  component: AeComponentView; // selected component;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  setComponent(component: any): void {
    this.component = component;
  }

}




/** Tips....
 *
 * 1. Use inline comment for fields unless using class comment.
 * It is more readable and allow us to utilize multi line select features fo IDEs.
 * Leave one tab between code and the inline comment.
 *
 *
 *
 */

