import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLIcogramModule, VCLIconModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { ButtonDemoComponent } from './demo.component';
import README from '@ng-vcl/ng-vcl/button/README.md';

export function demo() {
  return {
    label: 'Button',
    tabs: {
      Demo: ButtonDemoComponent,
      'README.md': {
        type: 'md',
        content: README
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLButtonModule,
    VCLIconModule,
    VCLIcogramModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ ButtonDemoComponent ],
  declarations: [ ButtonDemoComponent ]
})
export class ButtonDemoModule { }
