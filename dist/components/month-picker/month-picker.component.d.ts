import { OnInit, EventEmitter } from '@angular/core';
export declare class MonthPickerComponent implements OnInit {
    months: any[];
    yearMeta: any;
    currentMeta: any[];
    availableColors: boolean[];
    ngOnInit(): void;
    private setYearMeta(year);
    private createYearMeta(year);
    prevYearBtnIcon: string;
    nextYearBtnIcon: string;
    closeBtnIcon: string;
    monthsPerRow: number;
    expandable: boolean;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    maxYear: number;
    currentYear: number;
    currentYearChange: EventEmitter<number>;
    useShortNames: boolean;
    useAvailableMonths: boolean;
    colors: string[];
    maxSelectableItems: number;
    minSelectableItems: number;
    prevYearAvailable: boolean;
    nextYearAvailable: boolean;
    prevYearBtnTap: EventEmitter<{}>;
    nextYearBtnTap: EventEmitter<{}>;
    select: EventEmitter<string>;
    deselect: EventEmitter<string>;
    tabindex: number;
    selectMonth(month: number, year?: number): void;
    isMonthAvailable(month: number, year: number): boolean;
    isDateInBounds(month: number, year: number): boolean;
    isMonthInBounds(month: number): boolean;
    isYearInBounds(year: number): boolean;
    private getYearMeta(year);
    private iterateMonthMetas(cb);
    getSelectedDates(): string[];
    private setMonthBackgroundColor(month, year);
    private getMonthBackgroundColor();
    deselectMonth(month: number, year?: number): void;
    isMonthSelected(month: number, year: number): boolean;
    private clearMonthBackgroundColor(month, year);
    deselectAllMonths(): void;
    addAvailableMonth(month: number, year: number): void;
    removeAvailableMonth(month: number, year: number): void;
    removeAllAvailableMonths(): void;
    private onPrevYearTap();
    private onNextYearTap();
    private onCloseBtnTap();
    private notifySelect(date);
    private notifyDeselect(date);
    isCurrentMonth(month: number, year?: number): boolean;
    getMonth(month: number): any;
    static monthNames: string[];
    static monthNamesShort: string[];
}
