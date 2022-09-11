import { Component, Input } from '@angular/core';
import { HolidayCardsComponent } from './holiday-cards-component';
import { Holiday } from './model/holiday';
import { CommonModule } from '@angular/common';

@Component({
  template: ` <div
    *ngFor="let holiday of holidays"
    class="big-image"
    [ngStyle]="{ 'background-image': 'url(' + holiday.imageUrl + ')' }"
    data-testid="holiday"
  >
    <h2>{{ holiday.title }}</h2>
  </div>`,
  standalone: true,
  imports: [CommonModule],
})
export class SimpleHolidayCardsComponent implements HolidayCardsComponent {
  @Input() holidays: Holiday[] = [];
}
