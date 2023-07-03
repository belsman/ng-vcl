import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLIconModule } from '../icon/index';

import { IcogramComponent, IcogramLinkComponent } from './icogram.component';

export { IcogramComponent, IcogramLinkComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [IcogramComponent, IcogramLinkComponent, VCLIconModule],
  declarations: [IcogramComponent, IcogramLinkComponent],
  providers: [],
})
export class VCLIcogramModule {}
