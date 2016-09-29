import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';
import { VCLIcogramModule } from '../icogram/icogram.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLIcogramModule],
  exports: [LinkComponent],
  declarations: [LinkComponent],
  providers: [],
})
export class VCLLinkModule { }
