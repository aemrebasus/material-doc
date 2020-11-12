import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

/**
 * @param(string)   name          name of the component
 * @param(any)      component     Class of the component
 * @param(string)   html          Html code to display component
 * @param(string)   css           Style file content for this sample.
 * @param(string)   ts            Typescript code for this component.
 */
export interface NavMenuItem {
  name?: string;
  component?: any;
  html?: string;
  css?: string;
  ts?: string;
}

export interface Nav {
  menu: NavMenuItem[];
}


@Component({
  selector: 'ae-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  @Input() input: Nav = {
    menu: [
      {}
    ]
  };


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

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

