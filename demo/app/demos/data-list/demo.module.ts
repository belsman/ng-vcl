import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  VCLButtonModule,
  VCLBusyIndicatorModule,
  VCLIconModule,
  VCLIcogramModule,
  VCLInputModule,
  VCLDataListModule,
  VCLLayerModule,
  VCLPanelModule,
  VCLRadioButtonModule
} from '@vcl/ng-vcl';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { DataListDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/data-list/README.md';
import { DataListAddRemoveDemo } from './list-add-remove/data-list-add-remove-demo.component';
import { CreateCountryComponent } from './list-add-remove/create-country.component';

export function demo() {
  return {
    label: 'Data List',
    tabs: {
      Demo: DataListDemoComponent,
      'README.md': {
        type: 'md',
        content: README,
      },
      'demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./demo.component.html'),
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts'),
      },
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLButtonModule,
    VCLDataListModule,
    VCLIconModule,
    VCLInputModule,
    VCLIcogramModule,
    VCLBusyIndicatorModule,
    ScrollingModule,
    VCLPanelModule,
    VCLLayerModule,
    VCLRadioButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [DataListDemoComponent, DataListAddRemoveDemo, CreateCountryComponent],
})
export class DataListDemoModule {}
