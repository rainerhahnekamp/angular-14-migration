import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HolidayCardsComponent } from './holiday-cards-component';
import { Holiday } from './model/holiday';
import { NgForOf, NgStyle } from '@angular/common';

@Component({
  template: ` <div
    *ngFor="let holiday of viewModel"
    class="big-image"
    [ngStyle]="holiday.image"
    data-testid="holiday"
  >
    <h2>{{ holiday.title }}</h2>
  </div>`,
  standalone: true,
  imports: [NgForOf, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleHolidayCardsComponent
  implements HolidayCardsComponent, OnChanges
{
  @Input() holidays: Holiday[] = [];

  viewModel: { title: string; image: { 'background-image': string } }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.viewModel = this.holidays.map((holiday) => ({
      title: holiday.title,
      image: { 'background-image': `url('${holiday.imageUrl}')` },
    }));
  }
}
