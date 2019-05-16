import { Component,  ChangeDetectionStrategy, OnDestroy, OnChanges, AfterViewInit, Optional, Inject} from '@angular/core';
import { Subject, Observable, merge, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FORM_CONTROL_HOST, FormControlHost } from '../form-control-group/index';
import { Hint, DefaultHint, FormFieldHints, HintObject } from './types';
import { FormFieldControl, FormField } from './fields/index';
import { AbstractControl, NgForm } from '@angular/forms';


@Component({
  selector: 'vcl-jss-form-hints',
  templateUrl: 'jss-form-hints.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssFormControl'
})
export class JssFormHintsComponent implements OnDestroy, AfterViewInit {

  constructor(
    private ngForm: NgForm,
    @Optional() field?: FormField<any>,
    @Optional() @Inject(FORM_CONTROL_HOST) private fch?: FormControlHost
  ) {
    if (field instanceof FormFieldControl) {
      this.hints = field.hints;
      this.control = field.control;
    } else if ('hints' in field) {
      this.hints = (field as FormFieldHints).hints;
    }

    const $: Observable<any>[] = [];
    if (this.fch && this.fch.input) {
      $.push(this.fch && this.fch.input.stateChange);
    }
    if (this.control) {
      $.push(this.control.valueChanges, this.control.statusChanges);
    }
    this._sub = merge(...$).subscribe(this._hintsEmitter);
  }

  private hints: Hint[];
  private control?: AbstractControl;

  private _sub: Subscription;
  _hintsEmitter = new Subject<void>();

  hints$: Observable<HintObject[]> = this._hintsEmitter.asObservable().pipe(
    map(() => {
      if (!this.hints) {
        return [];
      }

      return this.hints.map(hint => {
        if (typeof hint === 'string') {
          return {
            type: 'default',
            message: hint
          } as DefaultHint;
        } else if (typeof hint === 'function') {
          return hint(this.control || this.ngForm.form);
        }
        return hint;
      });
    }),
    filter(hint => !!hint)
  );

  ngAfterViewInit() {
    this._hintsEmitter.next();
  }

  ngOnDestroy() {
    this._sub && this._sub.unsubscribe();
  }
}
