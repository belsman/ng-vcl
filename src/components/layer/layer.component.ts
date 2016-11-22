import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger } from '@angular/core';
import { WormholeGenerator } from './../../directives/wormhole/wormhole.module';
import { LayerService } from './layer.service';

@Component({
  selector: 'vcl-layer-base',
  templateUrl: 'layer-base.component.html',
  animations: [
    trigger('boxState', []),
    trigger('layerState', [])
  ]
})
export class LayerBaseComponent {

  visibleLayers = [];
  sub: Subscription;

  @Input()
  public name: string = 'default';

  @Input()
  public zIndex: number = 1000;

  constructor(private layerService: LayerService) { }

  ngOnInit() {
    this.sub = this.layerService.visibleLayersFor(this.name).subscribe(visibleLayers => {
      this.visibleLayers = visibleLayers;
    });
  }

  ngOnDestroy() {
    if (this.sub && !this.sub.closed) {
      this.sub.unsubscribe();
    }
  }
}

export interface LayerData { [key: string]: any; }

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
})
export class LayerDirective extends WormholeGenerator {

  visibilityChange$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  get visibilityChange(): Observable<boolean> {
    return this.visibilityChange$.asObservable();
  }

  @Input()
  public modal: boolean = true;

  @Input()
  public name: string;

  @Input()
  public base: string;

  _instanceResults: Subject<any>;

  data: LayerData = {};

  get state(){
    return this.visible ? 'open' : 'closed';
  }

  public visible = false;

  constructor(protected templateRef: TemplateRef<any>, private elementRef: ElementRef, private layerService: LayerService) {
    super(templateRef);
  }

  ngOnInit() {
    this.layerService.register(this);
  }

  ngOnDestroy() {
    this.layerService.unregister(this);
  }

  offClick() {
    if (!this.modal) {
      this.close();
    }
  }

  toggle() {
    this.visible = !this.visible;
    this.visibilityChange$.emit(this.visible);
  }

  open(data?: LayerData): Observable<any> {
    if (!this._instanceResults) {
      this._instanceResults = new Subject<any>();
    }
    if (typeof data === 'object' && data) {
      this.data = data;
    }
    this.visible = true;
    this.visibilityChange$.emit(this.visible);

    return this._instanceResults.asObservable();
  }

  send(result: any) {
    if (result !== undefined && this._instanceResults) {
      this._instanceResults.next(result);
    }
  }

  close(result?: any) {
    if (result !== undefined && this._instanceResults) {
      this._instanceResults.next(result);
      this._instanceResults.complete();
    }
    this.data = {};
    this._instanceResults = null;
    this.visible = false;
    this.visibilityChange$.emit(this.visible);
  }
}
