import { NgModule } from '@angular/core';
import { AeDocComponent } from './ae-doc.component';
import { AeComponentViewComponent } from './ae-component-view/ae-component-view.component';
import { AeTextContentComponent } from './ae-text-content/ae-text-content.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SampleComponentComponent } from './sample-component/sample-component.component';


@NgModule({
  declarations: [
    AeDocComponent,
    AeComponentViewComponent,
    AeTextContentComponent,
    NavComponent,
    SampleComponentComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    HighlightModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ClipboardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [AeDocComponent, AeComponentViewComponent, AeTextContentComponent, NavComponent, SampleComponentComponent]
})
export class AeDocModule { }
