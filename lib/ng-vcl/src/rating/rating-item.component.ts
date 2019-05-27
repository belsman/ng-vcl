import { Component, ChangeDetectionStrategy, HostBinding, Input, InjectionToken, Inject, HostListener, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { ENTER } from '@angular/cdk/keycodes';
import { IconService } from '../icon/index';

export interface Rating {
  ratingFullIcon: string;
  ratingHalfIcon: string;
  ratingEmptyIcon: string;
  isDisabled: boolean;
  onRatingItemClick(item: RatingItemComponent): void;
  onRatingItemHover(item: RatingItemComponent): void;
  onRatingItemBlur(item: RatingItemComponent): void;
  onRatingItemFocus(item: RatingItemComponent): void;
}

export const RATING_TOKEN = new InjectionToken<Rating>('vcl_rating');

@Component({
  selector: 'vcl-rating-item',
  templateUrl: 'rating-item.component.html',
  exportAs: 'vclRatingItem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgClass],
})
export class RatingItemComponent {

  constructor(
    // private elementRef: ElementRef<HTMLElement>,
    @Inject(RATING_TOKEN)
    private _rating: Rating,
    private ngClass: NgClass,
    private iconService: IconService
  ) {
    this.setState(this.state);
  }

  @ViewChild('labelTemplate', {read: TemplateRef})
  labelTemplateRef?: TemplateRef<any>;

  @ViewChild('label', {read: ElementRef})
  labelElementRef?: ElementRef<HTMLElement>;

  focused = false;

  @Input()
  disabled = false;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  _label?: string;

  @HostBinding('class.vclRatingItem')
  classVclRatingItem = true;

  @HostBinding('class.vclIcon')
  classVclIcon = true;

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  state: 'empty' | 'half' | 'full';

  setState(state: 'empty' | 'half' | 'full') {
    this.state = state;
    let icon;
    if (this.state === 'empty') {
      icon = this._rating.ratingEmptyIcon;
    } else if (this.state === 'half') {
      icon = this._rating.ratingHalfIcon;
    } else {
      icon = this._rating.ratingFullIcon;
    }

    this.ngClass.ngClass = this.iconService.resolve(icon);
    this.ngClass.ngDoCheck();
  }

  get isDisabled() {
    return this._rating.isDisabled || this.disabled;
  }

  @HostListener('click')
  onClick() {
    this._rating.onRatingItemClick(this);
  }

  @HostListener('keypress', ['$event'])
  async handleKeyPressEvent(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER) {
      event.preventDefault();
      this._rating.onRatingItemClick(this);
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this._rating.onRatingItemHover(this);
  }

  @HostListener('focus')
  onFocus() {
    this.focused = true;
    this._rating.onRatingItemFocus(this);
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
    this._rating.onRatingItemBlur(this);
  }

  get label() {
    return this._label || this.labelElementRef.nativeElement.innerText;
  }
}