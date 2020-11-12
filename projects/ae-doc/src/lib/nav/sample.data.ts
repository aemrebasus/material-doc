import { SampleComponentComponent } from '../sample-component/sample-component.component';

export const DEFAULT_NAV_COMPONENT_INPUT = {
    name: 'Default Project Name',
    menu: [
        {
            name: 'Sample Component 1',
            component: SampleComponentComponent,
            HTML: '<h1>Component Documentation</h1> <p>Documentation is fun</p>',
            TS: `
        const a = 100;
        const b = 1001;
        const c = 10001;
        const d = 100001
        `,

            CSS: `
        .class {color:red;}
        .class {color:red;}
        .class {color:red;}
        .class {color:red;}
        .class {color:red;}
        .class {color:red;}
        `
        },
        {
            name: 'Sample Component 2',
            component: SampleComponentComponent,
            HTML: '<h1>Component Documentation</h1> <p>Documentation is fun</p>',
            TS: `
      const a = 100;
      const b = 1001;
      const c = 10001;
      const d = 100001
      `,

            CSS: `
      .class {color:red;}
      .class {color:red;}
      .class {color:red;}
      .class {color:red;}
      .class {color:red;}
      .class {color:red;}
      `
        }
        , {
            name: 'Sample Component 3',
            component: SampleComponentComponent,
            HTML: '<h1>Component Documentation</h1> <p>Documentation is fun</p>',
            TS: `
    const a = 100;
    const b = 1001;
    const c = 10001;
    const d = 100001
    `,

            CSS: `
    .class {color:red;}
    .class {color:red;}
    .class {color:red;}
    .class {color:red;}
    .class {color:red;}
    .class {color:red;}
    `
        }
    ]
};
