import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button';
import { VCLPopoverModule } from '../popover';
import { TourOverlayComponent } from './tour-overlay.component';
import { TourService, TourOptions } from './tour.service';
import { TourComponent } from './tour.component';

export { TourService, TourOptions, TourComponent };

@NgModule({
  imports: [CommonModule, VCLPopoverModule, VCLButtonModule],
  exports: [TourComponent, TourOverlayComponent],
  declarations: [TourComponent, TourOverlayComponent],
  providers: [TourService],
})
export class VCLTourModule { }
