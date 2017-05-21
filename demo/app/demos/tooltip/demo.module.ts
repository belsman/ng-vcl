import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { NgModule } from '@angular/core';
import { ToolTipDemoComponent } from './demo.component';
 import { VCLTooltipModule } from '@ng-vcl/ng-vcl';

export function demo() {
  return {
    label: 'Tooltip',
    tabs: {
      Demo: ToolTipDemoComponent,
      'demo.component.html': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
      },
      'demo.component.ts': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
     VCLTooltipModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: { demo }
    }]),
  ],
  entryComponents: [
    ToolTipDemoComponent,
  ],
  declarations: [
    ToolTipDemoComponent,
  ]
})
export class ToolTipDemoModule { }
