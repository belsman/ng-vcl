import { InjectionToken, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tab {
  // portal?: TemplatePortal;
  contentTemplate?: TemplateRef<any>;
}

export interface TabNav {
  currentTab$: Observable<Tab | undefined>;
  currentTab: Tab | undefined;
  selectTab(tab?: Tab): void;
}

export const TAB_NAV_TOKEN = new InjectionToken<TabNav>('vcl_tab_nav');
