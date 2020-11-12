import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
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
