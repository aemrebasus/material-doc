import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { LayoutModule } from '@angular/cdk/layout';
import { AeDocModule } from 'projects/ae-doc/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AeDocModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: function () { return import('highlight.js/lib/core'); },
        lineNumbersLoader: function () { return import('highlightjs-line-numbers.js'); }, // Optional, only if you want the line number}s
        languages: {
          typescript: function () { return import('highlight.js/lib/languages/typescript'); },
          css: function () { return import('highlight.js/lib/languages/css'); },
          xml: function () { return import('highlight.js/lib/languages/xml'); },
          json: function () { return import('highlight.js/lib/languages/xml'); }
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
