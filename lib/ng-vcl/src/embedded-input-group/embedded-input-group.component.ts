import { Component, ContentChildren, QueryList, HostBinding, ElementRef, AfterContentInit, Renderer2, OnDestroy, ChangeDetectionStrategy, ContentChild, Inject, Optional, forwardRef } from '@angular/core';
import { InputDirective } from '../input/index';
import { merge, Subscription, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PrependDirective, AppendDirective } from '../core/index';
import { FORM_CONTROL_INPUT } from '../form-control-group/index';
import { FORM_CONTROL_MATERIAL_INPUT, FormControlMaterialInput } from '../material-design-inputs/index';

@Component({
  selector: 'vcl-embedded-input-group',
  templateUrl: 'embedded-input-group.component.html',
  exportAs: 'vclEmbeddedInputGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => EmbeddedInputGroupComponent)
    },
    {
      provide: FORM_CONTROL_MATERIAL_INPUT,
      useExisting: forwardRef(() => EmbeddedInputGroupComponent)
    }
  ]
})
export class EmbeddedInputGroupComponent implements AfterContentInit, OnDestroy, FormControlMaterialInput {

  private sub?: Subscription;

  constructor(
    private renderer: Renderer2,
  ) { }

  private stateChangedEmitter = new Subject<void>();
  controlType = 'embedded-input-group';

  get stateChanged() {
    return merge(this.input.stateChanged, this.stateChangedEmitter);
  }
  get elementId() {
    return this.input.elementId;
  }
  get isDisabled() {
    return this.input.isDisabled;
  }
  get isFocused() {
    return this.input.isFocused;
  }
  get hasError() {
    return this.input.hasError;
  }
  get ngControl() {
    return this.input.ngControl;
  }
  get value() {
    return this.input.value;
  }
  get isLabelFloating() {
    return this.input.isLabelFloating;
  }
  get materialModifierClass() {
    return this.prepend.length > 0 ? 'vclMaterialPrepItem' : undefined;
  }

  @HostBinding('class.vclInputGroupEmb')
  _hostClasses = true;

  @ContentChildren(PrependDirective, { read: ElementRef })
  prepend?: QueryList<ElementRef<HTMLElement>>;

  @ContentChildren(AppendDirective, { read: ElementRef })
  append?: QueryList<ElementRef<HTMLElement>>;

  @ContentChild(InputDirective, { read: InputDirective, static: false })
  input?: InputDirective;

  onLabelClick(event: Event): void {
    this.input.onLabelClick(event);
  }

  ngAfterContentInit(): void {
    this.sub = merge(this.prepend.changes, this.append.changes).pipe(startWith(undefined)).subscribe(() => {
      this.prepend.forEach(el => this.renderer.addClass(el.nativeElement, 'vclPrepended'));
      if (this.prepend.length > 0) {
        this.renderer.addClass(this.input.elementRef.nativeElement, 'vclPrepItem');
      }
      this.append.forEach(el => this.renderer.addClass(el.nativeElement, 'vclAppended'));
      if (this.append.length > 0)  {
        this.renderer.addClass(this.input.elementRef.nativeElement, 'vclAppItem');
      }
      this.stateChangedEmitter.next();
    });
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}