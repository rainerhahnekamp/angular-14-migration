import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysService } from './holidays.service';
import { DefaultHolidayCardsComponent } from './default-holiday-cards.component';
import { SimpleHolidayCardsComponent } from './simple-holiday-card.component';
import { NEW_LAYOUT } from '../shared/new-layout.token';

@Component({
  selector: 'eternal-holidays',
  template: `<h2>Choose among our Holidays</h2>
    <div><ng-template #holidayCards></ng-template></div>`,
  standalone: true,
  imports: [CommonModule],
})
export class HolidaysComponent implements OnInit {
  @ViewChild('holidayCards', { read: ViewContainerRef, static: true })
  viewContainerRef: ViewContainerRef | undefined;
  holidays$ = this.holidaysService.load();
  constructor(
    @Inject(NEW_LAYOUT) private newLayout: boolean,
    private holidaysService: HolidaysService
  ) {}

  ngOnInit(): void {
    if (this.viewContainerRef === undefined) {
      throw new Error('cannot find viewContainer for holidaycards');
    }

    const holidayCards = this.viewContainerRef.createComponent(
      this.newLayout
        ? SimpleHolidayCardsComponent
        : DefaultHolidayCardsComponent
    );
    this.holidays$.subscribe((holidays) => {
      holidayCards.setInput('holidays', holidays);
    });
  }
}
