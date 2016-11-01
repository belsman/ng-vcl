import { OnInit, EventEmitter } from '@angular/core';
export declare class MonthSelectorComponent implements OnInit {
    months: any[];
    yearMeta: any;
    currentMeta: any[];
    availableColors: string[];
    ngOnInit(): void;
    private setMinDate();
    private setMaxDate();
    prevMonthBtnIcon: string;
    nextMonthBtnIcon: string;
    closeBtnIcon: string;
    expandable: boolean;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    currentYear: number;
    currentYearChange: EventEmitter<number>;
    currentMonth: number;
    currentMonthChange: EventEmitter<number>;
    minDate: string;
    minYear: number;
    minYearMonth: number;
    maxDate: string;
    maxYear: number;
    maxYearMonth: number;
    useShortNames: boolean;
    prevMonthAvailable: boolean;
    prevMonthBtnTap: EventEmitter<{}>;
    nextMonthAvailable: boolean;
    nextMonthBtnTap: EventEmitter<{}>;
    tabindex: number;
    private onPrevMonthTap();
    private isPrevMonthAvailalbe();
    private onNextMonthTap();
    private isNextMonthAvailalbe();
    private onCloseBtnTap();
    isCurrentMonth(month: number, year?: number): boolean;
    static monthNames: string[];
    static monthNamesShort: string[];
}
