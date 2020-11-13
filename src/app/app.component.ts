import { Component } from '@angular/core';
import { SampleComponentComponent } from 'projects/ae-doc/src/lib/sample-component/sample-component.component';
import { AeDoc } from 'projects/ae-doc/src/public-api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular Material Documentation';
    input: AeDoc = {
        name: 'Angular Component Docuemntation',
        description: 'Some description ',
        nav: [
            {
                name: 'AeDocComponent 1 ',
                description: 'Create nice looking documentation pages for your components.',
                module: 'import { AeDocModule, AeDoc } from "ae-doc"',
                HTML: `<ae-doc [input]="input"></ae-doc>`,
                TS: `
        import { Component, Input, OnInit } from '@angular/core';
        import { AeDoc } from 'projects/ae-doc/src/public-api';

        @Component({
            selector: 'app-sample-doc',
            template: '<ae-doc [input]="input"></ae-doc>'
        })
        export class SampleDocComponent {
            @Input() input: AeDoc = {
                name: 'Angular Component Docuemntation',
                menu: [
                    {
                        name: 'AeDocComponent',
                        HTML: '<ae-doc [input]="input"></ae-doc>',
                    }
                ]
            };
        }

        

        // Add this to your module
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



        ### Add this style url to your main style file.

        @import "~highlight.js/styles/darcula.css";

        .hljs {
            margin: 4px;
        }

        .hljs .hljs {
            box-shadow: none;
            margin: 0px;
            border-left: 5px solid #404040;
            transition: font-size ease-in-out 400ms;
            cursor: copy;
        }




    `,
                component: SampleComponentComponent
            },
            {
                name: 'AeDocComponent 2',

                HTML: `<ae-doc [input]="input"></ae-doc>`,
                TS: `
        import { Component, Input, OnInit } from '@angular/core';
        import { AeDoc } from 'projects/ae-doc/src/public-api';

        @Component({
            selector: 'app-sample-doc',
            template: '<ae-doc [input]="input"></ae-doc>'
        })
        export class SampleDocComponent {
            @Input() input: AeDoc = {
                name: 'Angular Component Docuemntation',
                menu: [
                    {
                        name: 'AeDocComponent',
                        HTML: '<ae-doc [input]="input"></ae-doc>',
                    }
                ]
            };
        }



        

        // Add this to your module
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



        ### Add this style url to your main style file.

        @import "~highlight.js/styles/darcula.css";

        .hljs {
            margin: 4px;
        }

        .hljs .hljs {
            box-shadow: none;
            margin: 0px;
            border-left: 5px solid #404040;
            transition: font-size ease-in-out 400ms;
            cursor: copy;
        }




    `,
                component: SampleComponentComponent
            },
            {
                name: 'AeDocComponent 3',

                HTML: `<ae-doc [input]="input"></ae-doc>`,
                TS: `
        import { Component, Input, OnInit } from '@angular/core';
        import { AeDoc } from 'projects/ae-doc/src/public-api';

        @Component({
            selector: 'app-sample-doc',
            template: '<ae-doc [input]="input"></ae-doc>'
        })
        export class SampleDocComponent {
            @Input() input: AeDoc = {
                name: 'Angular Component Docuemntation',
                menu: [
                    {
                        name: 'AeDocComponent',
                        HTML: '<ae-doc [input]="input"></ae-doc>',
                    }
                ]
            };
        }

    `,
                component: SampleComponentComponent
            }
        ]
    };
}
