import {
  Component,
  Input,
  HostBinding,
  Optional,
  Inject,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';

import { FormControlGroupState, FORM_CONTROL_GROUP_STATE } from './interfaces';

@Component({
  selector: 'vcl-hint, vcl-hint-warning, vcl-hint-success',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['hint.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlHintComponent implements OnInit {
  @HostBinding('class.form-control-hint')
  classVCLFormControlHint = true;

  @HostBinding('class.warning')
  get classVCLWarning() {
    return (
      this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-hint-warning'
    );
  }

  @HostBinding('class.success')
  get classVCLSuccess() {
    return (
      this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-hint-success'
    );
  }
  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly cdRef: ChangeDetectorRef,
    @Inject(FORM_CONTROL_GROUP_STATE)
    @Optional()
    private readonly fcgs?: FormControlGroupState
  ) {}

  ngOnInit() {
    this.fcgs?.stateChanged.subscribe(() => {
      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
    });
  }
}

@Component({
  selector: 'vcl-hint-error',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlHintErrorComponent implements OnInit {
  @HostBinding('class.form-control-hint')
  @HostBinding('class.error')
  classVCLFormControlHint = true;

  @Input()
  error?: string;

  @HostBinding('style.display')
  get styleDisplay() {
    return this.visible ? null : 'none';
  }

  get visible() {
    if (this.error === undefined) {
      // Show hint
      return true;
    } else if (typeof this.error === 'string') {
      if (this.fcgs && this.fcgs.hasError) {
        return !!this.fcgs.getError(this.error);
      } else {
        return false;
      }
    }

    return true;
  }

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    @Inject(FORM_CONTROL_GROUP_STATE)
    @Optional()
    private readonly fcgs?: FormControlGroupState
  ) {}

  ngOnInit() {
    this.fcgs?.stateChanged.subscribe(() => {
      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
    });
  }
}
